import { Locale } from "@/lib/locale";
import { getAlternativeText } from "@/lib/utils";
import { ContentType, LogoType, TeamBuildingType } from "@/loaders/home";
import HeroSlider from "./HeroSlider";
import BigGallery from "./blocks/BigGallery";
import CallToAction from "./blocks/CallToAction";
import Counters from "./blocks/Counters";
import DoublePictureDetail from "./blocks/DoublePictureDetail";
import Faqs from "./blocks/Faqs";
import Gallery from "./blocks/Gallery";
import Hero from "./blocks/Hero";
import HeroGallery from "./blocks/HeroGallery";
import HeroVideo from "./blocks/HeroVideo";
import Logos from "./blocks/Logos";
import Paragraph from "./blocks/Paragraph";
import Picture from "./blocks/Picture";
import Services from "./blocks/Services";
import SinglePictureDetail from "./blocks/SinglePictureDetail";
import Skills from "./blocks/Skills";
import TeamBuildings from "./blocks/TeamBuildings";
import Testimonials from "./blocks/Testimonials";

type Props = {
  locale: Locale;
  logos?: LogoType[];
  teamBuildings?: TeamBuildingType[];
  content: any[];
};

export type PictureType = {
  url: string;
  width: number;
  height: number;
  alternativeText: string;
};

export type RawPictureType =
  | {
      url: string | null;
      width?: number | null;
      height?: number | null;
      alternativeText?: string | null;
    }
  | null
  | undefined;

export function mapPicture(
  picture: RawPictureType,
  locale: Locale,
): PictureType {
  return {
    url: picture?.url ?? "",
    width: picture?.width ?? 0,
    height: picture?.height ?? 0,
    alternativeText: getAlternativeText(picture?.alternativeText ?? "", locale),
  };
}

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const Content = async ({
  locale,
  content,
  logos = [],
  teamBuildings = [],
  priority,
}: {
  locale: Locale;
  content: ContentType;
  logos: LogoType[];
  teamBuildings: TeamBuildingType[];
  priority: boolean;
}) => {
  if (!content) return null;

  if (content.__typename === "ComponentBlocksHeroVideo") {
    const { title, url, background } = content;

    return (
      <HeroVideo
        locale={locale}
        title={title}
        url={url}
        background={mapPicture(background, locale)}
      />
    );
  }

  if (content.__typename === "ComponentBlocksTeamBuildings") {
    const { pretitle, title, description } = content;
    const teamBuildingsClean = teamBuildings.map((teamBuilding) => ({
      title: teamBuilding.title || "",
      slug: teamBuilding.slug || "",
      cover: mapPicture(teamBuilding?.cover, locale),
    }));

    return (
      <TeamBuildings
        locale={locale}
        pretitle={pretitle || ""}
        title={title}
        description={description || ""}
        teamBuildings={teamBuildingsClean}
      />
    );
  }

  if (content.__typename === "ComponentBlocksServices") {
    const { pretitle, title, description, servicesTag } = content;
    const subservices = content.subservices
      .filter(notEmpty)
      .map((subservice) => ({
        title: subservice.title || "",
        description: subservice.description || "",
        url: subservice.url || "",
        icon: subservice.icon,
      }));

    return (
      <Services
        locale={locale}
        pretitle={pretitle || ""}
        title={title}
        description={description || ""}
        asChild={servicesTag}
        subservices={subservices}
      />
    );
  }

  if (content.__typename === "ComponentBlocksCounters") {
    const counters = content.counters.map((counter) => ({
      value: counter?.value || 0,
      description: counter?.description || "",
    }));

    return <Counters counters={counters} />;
  }

  if (content.__typename === "ComponentBlocksHero") {
    const { pretitle, title, description, tag } = content;

    return (
      <Hero
        pretitle={pretitle || ""}
        title={title}
        description={description || ""}
        asChild={tag}
      />
    );
  }

  if (content.__typename === "ComponentBlocksHeroGallery") {
    const { pretitle, title, description, galleryItems } = content;
    const items = galleryItems.filter(notEmpty).map((item) => ({
      image: mapPicture(item.image, locale),
      url: item.url,
      title: item.title,
      tag: item.tag,
    }));

    return (
      <HeroGallery
        pretitle={pretitle || ""}
        title={title}
        description={description || ""}
        items={items}
      />
    );
  }

  if (content.__typename === "ComponentBlocksProgresses") {
    const { pretitle, title, description, items } = content;
    const filteredItems = items.filter(notEmpty);

    return (
      <Skills
        pretitle={pretitle || ""}
        title={title}
        description={description || ""}
        items={filteredItems}
      />
    );
  }

  if (content.__typename === "ComponentBlocksSinglePictureDetail") {
    const {
      pretitle,
      title,
      description,
      callToActionLabel,
      callToActionUrl,
      picture,
    } = content;

    return (
      <SinglePictureDetail
        pretitle={pretitle || ""}
        title={title}
        description={description || ""}
        callToActionLabel={callToActionLabel || ""}
        callToActionUrl={callToActionUrl || ""}
        picture={mapPicture(picture, locale)}
      />
    );
  }

  if (content.__typename === "ComponentBlocksDoublePictureDetail") {
    const { pretitle, title, description, picture1, picture2, subservices } =
      content;

    const filteredSubsevices = subservices.filter(notEmpty);

    return (
      <DoublePictureDetail
        pretitle={pretitle || ""}
        title={title}
        description={description || ""}
        picture1={mapPicture(picture1, locale)}
        picture2={mapPicture(picture2, locale)}
        subservices={filteredSubsevices}
      />
    );
  }

  if (content.__typename === "ComponentBlocksHeroSlider") {
    // TODO: Blur images
    const slides = await Promise.all(
      (content.slides ?? []).map(async (slide) => ({
        url: slide?.url || "",
        picture: mapPicture(slide?.picture, locale),
        blurDataURL: null,
      })),
    );

    return <HeroSlider slides={slides} priority={priority} />;
  }

  if (content.__typename === "ComponentBlocksFaqs") {
    const items = content.faqs?.map((faq) => ({
      question: faq?.question || "",
      answer: faq?.answer || "",
    }));

    return <Faqs items={items ?? []} />;
  }

  if (content.__typename === "ComponentBlocksParagraph") {
    const text = content.text;

    return <Paragraph text={text ?? ""} />;
  }

  if (content.__typename === "ComponentBlocksImage") {
    return (
      <Picture
        picture={mapPicture(content.image, locale)}
        size={content.size}
      />
    );
  }

  if (content.__typename === "ComponentBlocksGallery") {
    const media = content.images.map((image) => mapPicture(image, locale));

    return <Gallery media={media} />;
  }

  if (content.__typename === "ComponentBlocksBigGallery") {
    const media = content.bigGalleryItems.map((image) =>
      mapPicture(image, locale),
    );

    return <BigGallery media={media} />;
  }

  if (content.__typename === "ComponentBlocksCallToAction") {
    const { title, callToAction, url, callToActionBackground } = content;

    return (
      <CallToAction
        title={title}
        callToAction={callToAction}
        url={url}
        background={mapPicture(callToActionBackground, locale)}
      />
    );
  }

  if (content.__typename === "ComponentBlocksTestimonials") {
    const testimonials = (content.testimonials ?? [])
      .filter(notEmpty)
      .map((testimonial) => ({
        name: testimonial.name || "",
        role: testimonial.role || "",
        description: testimonial.description || "",
        avatar: mapPicture(testimonial.avatar, locale),
      }));

    return <Testimonials testimonials={testimonials} />;
  }

  if (content.__typename === "ComponentBlocksLogos") {
    const cleanLogos = logos.map((logo) => {
      const { name, url, image } = logo!;
      const { url: imageUrl, width, height } = image;

      return {
        name,
        url,
        image: {
          url: imageUrl,
          width: width ?? 0,
          height: height ?? 0,
        },
      };
    });

    return (
      <Logos
        pretitle={content.logosPretitle}
        title={content.logosTitle}
        description={content.logosDescription}
        logos={cleanLogos}
      />
    );
  }

  throw new Error(`Unknow component ${content.__typename}`);
};

export default function DynamicComponentPage({
  locale,
  content,
  logos,
  teamBuildings,
}: Props) {
  if (!content || content.length === 0) return null;

  return (
    <div className="distributed-container">
      {content.map((item, index) => (
        <Content
          key={index}
          locale={locale}
          content={item!}
          logos={logos ?? []}
          teamBuildings={teamBuildings ?? []}
          priority={index < 3}
        />
      ))}
    </div>
  );
}

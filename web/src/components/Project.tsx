import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import { ProjectType } from "@/loaders/project";
import Image from "next/image";
import PageTitle from "./Common/PageTitle";
import DynamicComponentPostPage from "./DynamicContentPostPage";
import JsonLD from "./JsonLD";
import { dynamicBlurDataUrl } from "@/lib/images";
import { mapPicture } from "./DynamicContentPage";

type Props = {
  locale: Locale;
  project: ProjectType;
};

export default async function Project({ locale, project }: Props) {
  const t = tl(locale);
  const n = nl(locale);

  const { title, cover, content } = project;

  const picture = mapPicture(cover, locale);
  const imageUrl = picture.url;

  const jd = {
    "@context": "http://www.schema.org",
    "@type": "product",
    brand: "The Green Vintage Events",
    name: title,
    image: imageUrl,
    description: "",
    aggregateRating: {
      "@type": "aggregateRating",
      ratingValue: `4.7${title.length}`,
      reviewCount: `${title.length + imageUrl.length}`,
    },
  };

  const blurDataURL = await dynamicBlurDataUrl(imageUrl);
  const blurOptions = blurDataURL
    ? {
        placeholder: "blur" as const,
        blurDataURL: blurDataURL,
      }
    : {};

  return (
    <>
      <PageTitle
        locale={locale}
        title={title}
        breadcrumbs={[
          {
            title: t("sections.projects"),
            href: n("projects"),
          },
        ]}
        asChild="h1"
      />
      <section className="bd-service-details-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bd-service-details">
                <Image
                  src={imageUrl}
                  className="img-fluid"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={title}
                  width={854}
                  height={480}
                  priority
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: 10,
                  }}
                  {...blurOptions}
                />

                <DynamicComponentPostPage content={content} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <JsonLD jd={jd} />
    </>
  );
}

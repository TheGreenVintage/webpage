import {
  TeamBuildingType,
  OtherTeamBuildingType,
} from "@/loaders/teamBuilding";
import DynamicComponentPostPage from "./DynamicContentPostPage";
import Link from "next/link";
import PageTitle from "./Common/PageTitle";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import Image from "next/image";
import JsonLD from "./JsonLD";
import { dynamicBlurDataUrl } from "@/lib/images";
import { mapPicture } from "./DynamicContentPage";

type Props = {
  locale: Locale;
  teamBuilding: TeamBuildingType;
  others: OtherTeamBuildingType[];
};

export default async function TeamBuilding({
  locale,
  teamBuilding,
  others,
}: Props) {
  const t = tl(locale);
  const n = nl(locale);
  const {
    title,
    content,
    cover,
    accessible,
    duration,
    language,
    localization,
    benefits,
    benefitsTitle,
  } = teamBuilding;
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
    <main>
      <PageTitle
        locale={locale}
        title={title}
        breadcrumbs={[
          {
            title: t("sections.services"),
            href: n("services"),
          },
          {
            title: t("sections.subservices.team-building"),
            href: n("team_building"),
          },
        ]}
        asChild="h1"
      />

      <section className="bd-service-details-area pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bd-service-details mb-20">
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
                <div className="bd-service-widget gray-bg mt-50 mb-30">
                  <div className="row pt-20">
                    <div className="col-lg-6 col-md-12">
                      <div className="bd-service-sidebar-category">
                        {Boolean(benefitsTitle) && (
                          <h5 className="bd-service-sidebar-category-title mb-20">
                            {benefitsTitle}
                          </h5>
                        )}
                        <ul>
                          {benefits.map((item, index: number) => (
                            <li key={index}>
                              <i className="far fa-check"></i> {item?.benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <h5 className="bd-service-sidebar-category-title mb-20">
                        {t("team-building.information")}
                      </h5>
                      <div className="bd-service-sidebar-infos">
                        {!!duration && (
                          <div className="bd-service-sidebar-info mb-25">
                            <span>{t("team-building.duration")}:</span>
                            <h6>{duration}h</h6>
                          </div>
                        )}
                        {!!language && (
                          <div className="bd-service-sidebar-info mb-25">
                            <span>{t("team-building.languages")}:</span>
                            <h6>
                              {language
                                .map((l: string) =>
                                  t(`team-building.languages_values.${l}`),
                                )
                                .join(", ")}
                            </h6>
                          </div>
                        )}
                        <div className="bd-service-sidebar-info mb-25">
                          <span>{t("team-building.accessible")}:</span>
                          <h6>
                            {accessible
                              ? t("team-building.accessible_yes")
                              : t("team-building.accessible_no")}
                          </h6>
                        </div>
                        {!!localization && (
                          <div className="bd-service-sidebar-info">
                            <span>{t("team-building.localization")}:</span>
                            <h6>{localization}</h6>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bd-portfolio-area pt-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bd-section-title-wrapper text-center mb-50">
                <h2
                  className="bd-section-title mb-25"
                  style={{ fontSize: "40px" }}
                >
                  {t("team-building.other")}
                </h2>
                <p>{t("team-building.other_description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {others.map((teamBuilding, index) => {
              const { title, cover, slug } = teamBuilding;
              const { url: imageUrl } = cover;

              const link = n("team_building", slug);

              return (
                <div key={index} className="col-lg-4 col-md-6">
                  <Link href={link} rel="dofollow">
                    <div className="bd-portfolio stable mb-30">
                      <Image
                        src={
                          imageUrl ||
                          "assets/img/portfolio/portfolio-details-1.jpg"
                        }
                        alt={title}
                        width={400}
                        height={225}
                      />
                      <div className="bd-portfolio-text">
                        <span>{t("sections.subservices.team-building")}</span>
                        <h5 className="bd-portfolio-title">{title}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <JsonLD jd={jd} />
    </main>
  );
}

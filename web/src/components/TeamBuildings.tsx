import Link from "next/link";
import PageTitle from "./Common/PageTitle";
import {
  TeamBuildingType,
  PreContentType,
  PostContentType,
} from "@/loaders/teamBuildings";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import ImgproxyImage from "./ImgproxyImage";
import DynamicComponentPage, { mapPicture } from "./DynamicContentPage";

type Props = {
  locale: Locale;
  teamBuildings: TeamBuildingType[];
  precontent: PreContentType[];
  postcontent: PostContentType[];
};

type TeamBuildingCardProps = {
  locale: Locale;
  teamBuilding: TeamBuildingType;
  priority: boolean;
};

function TeamBuildingCard({
  locale,
  teamBuilding,
  priority,
}: TeamBuildingCardProps) {
  const { slug, title, cover } = teamBuilding;
  const n = nl(locale);

  const picture = mapPicture(cover, locale);

  return (
    <div className="col-lg-4 col-md-6">
      <Link href={n("team_building", slug)}>
        <div className="bd-portfolio stable mb-30">
          <ImgproxyImage
            src={picture.url}
            alt={picture.alternativeText ?? title}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          <div className="bd-portfolio-text">
            <h5 className="bd-portfolio-title">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function TeamBuildings({
  locale,
  teamBuildings,
  precontent,
  postcontent,
}: Props) {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <>
      <PageTitle
        locale={locale}
        title={t("sections.subservices.team-building")}
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
      <DynamicComponentPage locale={locale} content={precontent} />
      <section className="portfolio-area">
        <div className="container">
          <div className="row">
            {teamBuildings.map((teamBuilding, index) => (
              <TeamBuildingCard
                key={index}
                locale={locale}
                teamBuilding={teamBuilding}
                priority={index < 6}
              />
            ))}
          </div>
        </div>
      </section>
      <DynamicComponentPage locale={locale} content={postcontent} />
    </>
  );
}

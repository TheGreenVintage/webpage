import React from "react";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import Link from "next/link";
import Image from "next/image";

type TeamBuildingType = {
  title: string;
  slug: string;
  cover: {
    url: string;
    width: number;
    height: number;
  };
};

type Props = {
  locale: Locale;
  pretitle: string;
  title: string;
  description: string;
  teamBuildings: TeamBuildingType[];
};

export default function TeamBuildings({
  locale,
  pretitle,
  title,
  description,
  teamBuildings,
}: Props) {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <section className="bd-portfolio-area">
      <div className="container">
        <div className="row">
          <div className="col-12 pb-40">
            <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
            <h2 className="bd-section-title mb-25">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="row">
          {teamBuildings.map((teamBuilding, index) => {
            const { title, cover, slug } = teamBuilding;
            const { url: imageUrl } = cover;

            const link = n("team_building", slug);

            return (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={link}>
                  <div className="bd-portfolio stable mb-30">
                    <Image
                      src={imageUrl}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  );
}

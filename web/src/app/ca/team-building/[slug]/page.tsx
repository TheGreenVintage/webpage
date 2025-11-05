import React from "react";
import {
  pickOtherItems,
  loader as teamBuildingLoader,
} from "@/loaders/teamBuilding";
import { loader as teamBuildingsLoader } from "@/loaders/teamBuildings";
import TeamBuilding from "@/components/TeamBuilding";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { nl } from "@/lib/navigation";
import { ca as locale, tl } from "@/lib/locale";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { teamBuildings } = await teamBuildingsLoader(locale);

  return teamBuildings.map((teamBuilding) => ({
    slug: teamBuilding.slug,
  }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { teamBuilding } = await teamBuildingLoader(locale, params.slug);

  const t = tl(locale);
  const n = nl(locale);
  const tail = n("team_building", params.slug);

  const metaTitle = teamBuilding.meta_title;
  const metaDescription = teamBuilding.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "team_building",
    tail,
    subtitle:
      t("sections.subservices.team-building") + " - " + teamBuilding.title,
    metaTitle,
    metaDescription,
    includeCompanyName: false,
  });
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { teamBuilding, others } = await teamBuildingLoader(
    locale,
    params.slug,
  );

  return (
    <TeamBuilding
      locale={locale}
      teamBuilding={teamBuilding}
      others={pickOtherItems(others, params.slug)}
    />
  );
}

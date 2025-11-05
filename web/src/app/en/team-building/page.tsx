import React from "react";
import { loader as teamBuildingsLoader } from "@/loaders/teamBuildings";
import TeamBuildings from "@/components/TeamBuildings";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, en as locale } from "@/lib/locale";

export async function generateMetadata() {
  const { page } = await teamBuildingsLoader(locale);

  const t = tl(locale);

  const metaTitle = page.meta_title;
  const metaDescription = page.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "team_building",
    subtitle: t("sections.subservices.team-building"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const { teamBuildings, page } = await teamBuildingsLoader(locale);

  return (
    <TeamBuildings
      locale={locale}
      teamBuildings={teamBuildings}
      precontent={page.precontent ?? []}
      postcontent={page.postcontent ?? []}
    />
  );
}

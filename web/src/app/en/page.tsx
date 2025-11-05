import React from "react";
import { loader as homeLoader } from "@/loaders/home";
import Home from "@/components/Home";
import { pickOtherItems } from "@/loaders/teamBuilding";
import { en as locale } from "@/lib/locale";
import { generateMetadataByLocale } from "@/lib/generateMetadata";

export const dynamic = "force-static";

export async function generateMetadata() {
  const { page } = await homeLoader(locale);

  const metaTitle = page.meta_title;
  const metaDescription = page.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "home",
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const { logos, teamBuildings, page } = await homeLoader(locale);

  return (
    <Home
      locale={locale}
      logos={logos}
      teamBuildings={pickOtherItems(teamBuildings)}
      content={page.content}
    />
  );
}

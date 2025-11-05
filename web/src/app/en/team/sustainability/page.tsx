import React from "react";
import Sustainability from "@/components/Sustainability";
import { loader as sustainabilityLoader } from "@/loaders/sustainability";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, en as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const sustainability = await sustainabilityLoader(locale);

  const t = tl(locale);

  const metaTitle = sustainability.meta_title;
  const metaDescription = sustainability.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "sustainability",
    subtitle: t("sections.sustainability"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const sustainability = await sustainabilityLoader(locale);

  return (
    <Sustainability locale={locale} content={sustainability.content ?? []} />
  );
}

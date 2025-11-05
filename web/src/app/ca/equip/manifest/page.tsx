import React from "react";
import Manifest from "@/components/Manifest";
import { loader as manifestLoader } from "@/loaders/manifest";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, ca as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const manifest = await manifestLoader(locale);
  const t = tl(locale);

  const metaTitle = manifest.meta_title;
  const metaDescription = manifest.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "manifest",
    subtitle: t("sections.manifest"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const manifest = await manifestLoader(locale);

  return <Manifest locale={locale} content={manifest.content} />;
}

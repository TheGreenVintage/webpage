import React from "react";
import Terms from "@/components/Terms";
import { loader as termsLoader } from "@/loaders/terms";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, ca as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const terms = await termsLoader(locale);

  const t = tl(locale);

  const metaTitle = terms.meta_title;
  const metaDescription = terms.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "terms",
    subtitle: t("sections.terms"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const terms = await termsLoader(locale);

  return <Terms locale={locale} terms={terms} />;
}

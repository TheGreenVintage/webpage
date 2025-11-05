import React from "react";
import Legal from "@/components/Legal";
import { loader as legalLoader } from "@/loaders/legal";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, es as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const legal = await legalLoader(locale);

  const t = tl(locale);

  const metaTitle = legal.meta_title;
  const metaDescription = legal.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "legal",
    subtitle: t("sections.legal"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const legal = await legalLoader(locale);

  return <Legal locale={locale} legal={legal} />;
}

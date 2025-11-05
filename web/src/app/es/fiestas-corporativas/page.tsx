import React from "react";
import { loader } from "@/loaders/corporativeParties";
import CorporativeParties from "@/components/CorporativeParties";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, es as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const corporativeParties = await loader(locale);

  const t = tl(locale);

  const metaTitle = corporativeParties.meta_title;
  const metaDescription = corporativeParties.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "corporative-parties",
    subtitle: t("sections.subservices.corporative-parties"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const corporativeParties = await loader(locale);

  return (
    <CorporativeParties
      locale={locale}
      title={corporativeParties.title}
      content={corporativeParties.content}
      metaDescription={corporativeParties.meta_description ?? null}
    />
  );
}

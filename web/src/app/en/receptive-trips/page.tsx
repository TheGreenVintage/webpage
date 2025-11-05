import React from "react";
import { loader } from "@/loaders/receptiveTrips";
import ReceptiveTrips from "@/components/ReceptiveTrips";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, en as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const { page } = await loader(locale);

  const t = tl(locale);

  const metaTitle = page.meta_title;
  const metaDescription = page.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "receptive-trips",
    subtitle: t("sections.subservices.receptive-trips"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const { page } = await loader(locale);

  return (
    <ReceptiveTrips
      locale={locale}
      title={page.title}
      content={page.content}
      metaDescription={page.meta_description ?? null}
    />
  );
}

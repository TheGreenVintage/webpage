import React from "react";
import Services from "@/components/Services";
import { loader as servicesLoader } from "@/loaders/services";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, en as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const services = await servicesLoader(locale);

  const t = tl(locale);

  const metaTitle = services.meta_title;
  const metaDescription = services.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "services",
    subtitle: t("sections.services"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const services = await servicesLoader(locale);

  return <Services locale={locale} content={services.content} />;
}

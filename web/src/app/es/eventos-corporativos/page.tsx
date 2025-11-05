import React from "react";
import { loader } from "@/loaders/businessEvents";
import BusinessEvents from "@/components/BusinessEvents";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, es as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const businessEvents = await loader(locale);

  const t = tl(locale);

  const metaTitle = businessEvents.meta_title;
  const metaDescription = businessEvents.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "business-events",
    subtitle: t("sections.subservices.business-events"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const businessEvents = await loader(locale);

  return (
    <BusinessEvents
      locale={locale}
      title={businessEvents.title}
      content={businessEvents.content}
      metaDescription={businessEvents.meta_description ?? null}
    />
  );
}

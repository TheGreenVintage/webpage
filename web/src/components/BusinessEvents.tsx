import PageTitle from "./Common/PageTitle";
import { Locale, tl } from "@/lib/locale";
import { ContentType } from "@/loaders/businessEvents";

import DynamicComponentPage from "./DynamicContentPage";
import { nl } from "@/lib/navigation";
import JsonLD from "./JsonLD";

type Props = {
  locale: Locale;
  title?: string | null;
  content: ContentType[];
  metaDescription: string | null;
};

export default function BusinessEvents({
  locale,
  title: overWritenTitle,
  content,
  metaDescription,
}: Props) {
  const t = tl(locale);
  const n = nl(locale);
  const type = "business-events";

  const title = overWritenTitle ?? t(`sections.subservices.${type}`);

  const jd = {
    "@context": "http://www.schema.org",
    "@type": "product",
    brand: "The Green Vintage Events",
    name: title,
    description: metaDescription ?? "",
    aggregateRating: {
      "@type": "aggregateRating",
      ratingValue: `4.7${title.length}`,
      reviewCount: `${title.length}`,
    },
  };

  return (
    <main>
      <PageTitle
        locale={locale}
        title={title ?? t(`sections.subservices.${type}`)}
        breadcrumbs={[
          {
            title: t("sections.services"),
            href: n("services"),
          },
          {
            title: t(`sections.subservices.${type}`),
            href: n(type),
          },
        ]}
      />
      <DynamicComponentPage locale={locale} content={content} />
      <JsonLD jd={jd} />
    </main>
  );
}

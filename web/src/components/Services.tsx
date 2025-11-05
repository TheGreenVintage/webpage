import { ContentType } from "@/loaders/services";

import { nl } from "@/lib/navigation";
import { Locale, tl } from "@/lib/locale";

import PageTitle from "./Common/PageTitle";
import DynamicComponentPage from "./DynamicContentPage";

type Props = {
  locale: Locale;
  content: ContentType[];
};

export default function Services({ locale, content }: Props) {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <main>
      <PageTitle
        locale={locale}
        title={t("sections.services")}
        breadcrumbs={[
          {
            title: t("sections.services"),
            href: n("services"),
          },
        ]}
        asChild="h1"
      />
      <DynamicComponentPage locale={locale} content={content} />
    </main>
  );
}

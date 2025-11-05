import PageTitle from "./Common/PageTitle";
import { Locale, tl } from "@/lib/locale";
import { ContentType } from "@/loaders/sustainability";

import DynamicComponentPage from "./DynamicContentPage";
import { nl } from "@/lib/navigation";

type Props = {
  locale: Locale;
  content: ContentType[];
};

export default function Sustainability({ locale, content }: Props) {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <main>
      <PageTitle
        locale={locale}
        title={t("sections.sustainability")}
        breadcrumbs={[
          {
            title: t("sections.team"),
            href: n("team"),
          },
          {
            title: t("sections.sustainability"),
            href: n("sustainability"),
          },
        ]}
      />
      <DynamicComponentPage locale={locale} content={content} />
    </main>
  );
}

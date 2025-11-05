import PageTitle from "./Common/PageTitle";
import { Locale, tl } from "@/lib/locale";
import { ContentType } from "@/loaders/manifest";

import DynamicComponentPage from "./DynamicContentPage";
import { nl } from "@/lib/navigation";

type Props = {
  locale: Locale;
  content: ContentType[];
};

export default function Manifest({ locale, content }: Props) {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <main>
      <PageTitle
        locale={locale}
        title={t("sections.manifest")}
        breadcrumbs={[
          {
            title: t("sections.team"),
            href: n("team"),
          },
          {
            title: t("sections.manifest"),
            href: n("manifest"),
          },
        ]}
      />
      <DynamicComponentPage locale={locale} content={content} />
    </main>
  );
}

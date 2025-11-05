import { LegalType } from "@/loaders/legal";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import PageTitle from "./Common/PageTitle";
import { Markdown } from "./Markdown";

type Props = {
  locale: Locale;
  legal: LegalType;
};

export default function Legal({ locale, legal }: Props) {
  const n = nl(locale);
  const t = tl(locale);
  const { description } = legal;

  return (
    <>
      <PageTitle
        locale={locale}
        title={t("sections.legal")}
        breadcrumbs={[
          {
            title: t("sections.legal"),
            href: n("legal"),
          },
        ]}
        asChild="h1"
      />
      <section className="pt-100 pb-100">
        <div className="container">
          <div className="row">
            <Markdown content={description} />
          </div>
        </div>
      </section>
    </>
  );
}

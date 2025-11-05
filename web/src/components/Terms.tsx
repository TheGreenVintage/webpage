import { TermsType } from "@/loaders/terms";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import PageTitle from "./Common/PageTitle";
import { Markdown } from "./Markdown";

type Props = {
  locale: Locale;
  terms: TermsType;
};

export default function Terms({ locale, terms }: Props) {
  const n = nl(locale);
  const t = tl(locale);
  const { description } = terms;

  return (
    <>
      <PageTitle
        locale={locale}
        title={t("sections.terms")}
        breadcrumbs={[
          {
            title: t("sections.terms"),
            href: n("terms"),
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

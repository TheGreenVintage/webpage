import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import PageTitle from "./Common/PageTitle";
import Hero from "./blocks/Hero";

type Props = {
  locale: Locale;
};

export default function ContactSent({ locale }: Props) {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <main>
      <PageTitle
        locale={locale}
        title={t("sections.contact")}
        breadcrumbs={[
          {
            title: t("sections.contact"),
            href: n("contact"),
          },
        ]}
      />
      <section className="bd-contact-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <Hero
              pretitle={t("contact.success.pretitle")}
              title={t("contact.success.title")}
              description={t("contact.success.description")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

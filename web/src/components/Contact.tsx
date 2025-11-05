import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import PageTitle from "./Common/PageTitle";
import ContactForm from "./ContactForm";
import { PreContentType, PostContentType } from "@/loaders/contact";
import DynamicComponentPage from "./DynamicContentPage";

type Props = {
  locale: Locale;
  pretitle?: string | null;
  title: string;
  description: string;
  precontent: PreContentType[];
  postcontent: PostContentType[];
};

export default function Contact({
  locale,
  pretitle,
  title,
  description,
  precontent,
  postcontent
}: Props) {
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
        asChild="h1"
      />
      <DynamicComponentPage locale={locale} content={precontent} />
      <section className="bd-contact-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="bd-contact mb-30">
                <div className="bd-section-title-wrapper mb-50">
                  <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
                  <h2 className="bd-section-title mb-25">{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="bd-contacts mb-45">
                  <div className="bd-contact-list mb-20">
                    <div className="bd-contact-list-icon">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="bd-contact-list-text">
                      <h5 className="bd-contact-list-text-title">
                        {t("contact.phone")}
                      </h5>
                      <a
                        className="plausible-event-name=Click+Phone"
                        href={`tel:${t("us.telephone1")}`}
                      >
                        {t("us.telephone1")}
                      </a>
                      <span>&nbsp;-&nbsp;</span>
                      <a
                        className="plausible-event-name=Click+Phone"
                        href={`tel:${t("us.telephone2")}`}
                      >
                        {t("us.telephone2")}
                      </a>
                    </div>
                  </div>
                  <div className="bd-contact-list mb-20">
                    <div className="bd-contact-list-icon">
                      <i className="flaticon-mail-inbox-app"></i>
                    </div>
                    <div className="bd-contact-list-text">
                      <h5 className="bd-contact-list-text-title">
                        {t("contact.email")}
                      </h5>
                      <a
                        className="plausible-event-name=Click+Email"
                        href={`mailto:${t("us.email")}`}
                      >
                        {t("us.email")}
                      </a>
                    </div>
                  </div>
                  <div className="bd-contact-list">
                    <div className="bd-contact-list-icon">
                      <i className="flaticon-location"></i>
                    </div>
                    <div className="bd-contact-list-text">
                      <h5 className="bd-contact-list-text-title">
                        {t("contact.location")}
                      </h5>
                      <a href={t("us.maps")} target="_blank">
                        {t("us.address")}
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="bd-contact-social-title mb-20">
                  {t("contact.follow_us")}
                </h4>
                <div className="bd-contact-social">
                  <a
                    href="https://www.facebook.com/TGVintage"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.twitter.com/Green_Vintage_"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://instagram.com/thegreenvintage"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC5Y4rAHcDQs5OUlZMJ6lMLw"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/the-green-vintage"
                    aria-label="Linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bd-contact-form mb-30">
                <ContactForm locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DynamicComponentPage locale={locale} content={postcontent} />
    </main>
  );
}

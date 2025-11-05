import Link from "next/link";
import Image from "next/image";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";

type Props = {
  locale: Locale;
};

export default function Footer({ locale }: Props) {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <footer className="gray-bg">
      <div className="bd-footer-area pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="bd-footer-widget bd-footer-widget-six footer-col-5 mb-30">
                <div className="bd-footer-info">
                  <div className="bd-footer-info-logo mb-35">
                    <Link href={`/${locale}`}>
                      <Image
                        src="/assets/img/logo/logo-black.png"
                        unoptimized
                        className="img-fluid"
                        alt={t("us.name")}
                        width={90}
                        height={80}
                        style={{ height: "auto" }}
                      />
                    </Link>
                  </div>
                  <p className="mb-30">{t("footer.description")}</p>
                  <div className="bd-footer-widget-six-social">
                    <a
                      className="plausible-event-name=Click+Social"
                      href="https://www.facebook.com/TGVintage"
                      aria-label="Facebook"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="plausible-event-name=Click+Social"
                      href="https://www.twitter.com/Green_Vintage_"
                      aria-label="Twitter"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="plausible-event-name=Click+Social"
                      href="https://instagram.com/thegreenvintage"
                      aria-label="Instagram"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="plausible-event-name=Click+Social"
                      href="https://www.youtube.com/channel/UC5Y4rAHcDQs5OUlZMJ6lMLw"
                      aria-label="Twitter"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      className="plausible-event-name=Click+Social"
                      href="https://www.linkedin.com/company/the-green-vintage"
                      aria-label="Linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="bd-footer-widget bd-footer-widget-six footer-col-6 mb-30">
                <h5 className="bd-footer-widget-title bd-footer-widget-title-six mb-35">
                  {t("footer.services")}
                </h5>
                <ul>
                  <li>
                    <Link href={n("team_building")} rel="dofollow">
                      {t("sections.subservices.team-building")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("receptive-trips")} rel="dofollow">
                      {t("sections.subservices.receptive-trips")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("corporative-parties")} rel="dofollow">
                      {t("sections.subservices.corporative-parties")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("business-events")} rel="dofollow">
                      {t("sections.subservices.business-events")}
                    </Link>
                  </li>
                </ul>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    paddingTop: 50,
                    marginLeft: -5,
                  }}
                >
                  <Image
                    src="/assets/img/biosphere.png"
                    unoptimized
                    alt="Biosphere"
                    width={90}
                    height={120}
                  />
                  <Image
                    src="/assets/img/sostenible.png"
                    unoptimized
                    alt="Membre Barcelona Sostenible"
                    width={90}
                    height={120}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="bd-footer-widget bd-footer-widget-six footer-col-7 mb-30">
                <h5 className="bd-footer-widget-title bd-footer-widget-title-six mb-35">
                  {t("footer.company")}
                </h5>
                <ul>
                  <li>
                    <Link href={n("projects")} rel="dofollow">
                      {t("sections.projects")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("team")} rel="dofollow">
                      {t("sections.team")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("services")} rel="dofollow">
                      {t("sections.services")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("blog")} rel="dofollow">
                      {t("sections.blog")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("contact")} rel="dofollow">
                      {t("sections.contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="bd-footer-widget bd-footer-widget-six footer-col-8 mb-30">
                <h5 className="bd-footer-widget-title bd-footer-widget-title-six mb-40">
                  {t("footer.get_in_touch")}
                </h5>
                <div className="bd-footer-info">
                  <div className="bd-footer-info-item bd-footer-info-item-six mb-10">
                    <h6>{t("footer.phone")}:</h6>
                    <a
                      className="plausible-event-name=Click+Phone"
                      href={`tel:${t("us.telephone1")}`}
                    >
                      {t("us.telephone1")}
                    </a>
                    <a
                      className="plausible-event-name=Click+Phone"
                      href={`tel:${t("us.telephone2")}`}
                    >
                      {t("us.telephone2")}
                    </a>
                  </div>
                  <div className="bd-footer-info-item bd-footer-info-item-six mb-10">
                    <h6>{t("footer.email")}:</h6>
                    <a
                      className="plausible-event-name=Click+Email"
                      href={`mailto:${t("us.email")}`}
                    >
                      {t("us.email")}
                    </a>
                  </div>
                  <div className="bd-footer-info-item bd-footer-info-item-six">
                    <h6>{t("footer.location")}:</h6>
                    <a href={t("us.maps")} target="_blank">
                      {t("us.address")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-copyright-area-six">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-2 order-lg-1">
              <div className="bd-copyright-six pb-10 text-center text-lg-start">
                <p className="m-0">
                  © {new Date().getFullYear()} {t("footer.all_rights")}
                </p>
              </div>
            </div>
            <div className="col-lg-8 order-1 order-lg-2">
              <div className="bd-copyright-six pb-10 text-lg-end text-center">
                <ul>
                  <li>
                    <Link href="/en" rel="dofollow">
                      <Image
                        src="/assets/img/flags/en.svg"
                        unoptimized
                        alt={t("flags.en")}
                        width={25}
                        height={15}
                        style={{ marginRight: 6 }}
                      />
                      ENG
                    </Link>
                    <span>&nbsp;-&nbsp;</span>
                    <Link href="/ca" rel="dofollow">
                      <Image
                        src="/assets/img/flags/ca.svg"
                        unoptimized
                        alt={t("flags.ca")}
                        width={25}
                        height={15}
                        style={{ marginRight: 6 }}
                      />
                      CAT
                    </Link>
                    <span>&nbsp;-&nbsp;</span>
                    <Link href="/es" rel="dofollow">
                      <Image
                        src="/assets/img/flags/es.svg"
                        unoptimized
                        alt={t("flags.es")}
                        width={25}
                        height={15}
                        style={{ marginRight: 6 }}
                      />
                      ESP
                    </Link>
                  </li>
                  <li>
                    <Link href={n("legal")} rel="dofollow">
                      {t("footer.legal")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("terms")} rel="dofollow">
                      {t("footer.terms")}
                    </Link>
                  </li>
                  <li>
                    <Link href={n("contact")} rel="dofollow">
                      {t("footer.contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

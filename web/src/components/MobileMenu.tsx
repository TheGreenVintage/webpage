"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";

type Props = {
  locale: Locale;
  setMenuOpen: any;
  menuOpen: boolean;
};

const MobileMenu = ({ locale, setMenuOpen, menuOpen }: Props) => {
  const [, setProjects] = useState(false);
  const [team, setTeam] = useState(false);
  const [services, setServices] = useState(false);
  const [, setBlog] = useState(false);
  const [, setContact] = useState(false);

  const t = tl(locale);
  const n = nl(locale);

  const openMobileMenu = (
    menu: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setProjects(menu === "projects");
    setTeam(menu === "team");
    setServices(menu === "services");
    setBlog(menu === "blog");
    setContact(menu === "contact");
  };

  return (
    <>
      <div className="fix">
        <div className={menuOpen ? "side-info info-open" : "side-info"}>
          <button
            className="side-info-close"
            onClick={() => setMenuOpen(false)}
            aria-label={t("other.close_menu")}
          >
            <i className="fal fa-times"></i>
          </button>
          <div className="side-info-content">
            <div className="bd-mobile-menu"></div>
            <div className="mm-menu mm-menu-1 mb-60 d-xl-none">
              <ul onClick={() => setMenuOpen(false)}>
                <li>
                  <Link href={n("projects")}>{t("sections.projects")}</Link>
                </li>
                <li
                  className={
                    services ? "has-droupdown active" : "has-droupdown"
                  }
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      openMobileMenu("services", e);
                    }}
                  >
                    {t("sections.services")}
                  </a>
                  <ul className={services ? "sub-menu active" : "sub-menu"}>
                    <li>
                      <Link href={n("team_building")}>
                        {t("sections.subservices.team-building")}
                      </Link>
                    </li>
                    <li>
                      <Link href={n("receptive-trips")}>
                        {t("sections.subservices.receptive-trips")}
                      </Link>
                    </li>
                    <li>
                      <Link href={n("corporative-parties")}>
                        {t("sections.subservices.corporative-parties")}
                      </Link>
                    </li>
                    <li>
                      <Link href={n("business-events")}>
                        {t("sections.subservices.business-events")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={team ? "has-droupdown active" : "has-droupdown"}>
                  <a
                    href="#"
                    onClick={(e) => {
                      openMobileMenu("team", e);
                    }}
                  >
                    {t("sections.team")}
                  </a>
                  <ul className={team ? "sub-menu active" : "sub-menu"}>
                    <li>
                      <Link href={n("team")}>{t("sections.members")}</Link>
                    </li>
                    <li>
                      <Link href={n("manifest")}>{t("sections.manifest")}</Link>
                    </li>
                    <li>
                      <Link href={n("sustainability")}>
                        {t("sections.sustainability")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={n("blog")}>{t("sections.blog")}</Link>
                </li>
                <li>
                  <Link href={n("contact")}>{t("sections.contact")}</Link>
                </li>
              </ul>
            </div>
            <div className="contact-infos mb-30">
              <div className="contact-list mb-30">
                <h4>{t("sections.contact")}</h4>
                <ul>
                  <li>
                    <i className="flaticon-email"></i>
                    <a
                      className="plausible-event-name=Click+Email"
                      href={`mailto:${t("us.email")}`}
                    >
                      {t("us.email")}
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-phone-call"></i>
                    <a
                      className="plausible-event-name=Click+Phone"
                      href={`tel:${t("us.telephone1")}`}
                    >
                      {t("us.telephone1")}
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-phone-call"></i>
                    <a
                      className="plausible-event-name=Click+Phone"
                      href={`tel:${t("us.telephone2")}`}
                    >
                      {t("us.telephone2")}
                    </a>
                  </li>
                </ul>
                <div className="sidebar__menu--social">
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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import useSticky from "../hooks/useSticky";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import Image from "next/image";

type Props = {
  locale: Locale;
};

export default function Header({ locale }: Props) {
  const { sticky } = useSticky();
  const [menuOpen, setMenuOpen] = useState(false);

  const t = tl(locale);
  const n = nl(locale);

  return (
    <>
      <header>
        <div
          className={
            sticky
              ? "bd-header-area bd-header-area-four header-sticky sticky-menu"
              : "bd-header-area bd-header-area-four header-sticky"
          }
        >
          <div className="bd-header-border bd-header-spacing">
            <div className="bd-custom-container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-7 order-1 order-xl-1">
                  <div className="bd-header-logo">
                    <Link href={`/${locale}`}>
                      <Image
                        src="/assets/img/logo/logo-black.png"
                        unoptimized
                        alt={t("us.name")}
                        width={90}
                        height={80}
                        style={{ height: "auto" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-1 col-md-1 col-sm-1 col-2 order-3 order-xl-2">
                  <div className="bd-main-menu bd-main-menu-border bd-main-menu-border-four d-none d-xl-block">
                    <MainMenu locale={locale} />
                  </div>
                  <div className="side-menu-icon side-menu-icon-four d-xl-none text-end">
                    <button
                      aria-label={t("other.open_menu")}
                      className="side-toggle"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-8 col-md-8 col-sm-8 col-3 order-2 order-xl-3">
                  <div className="bd-header-right bd-header-right-four text-end">
                    <div className="bd-header-social">
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
                    <div className="bd-header-btn">
                      <Link href={n("contact")} className="theme-btn">
                        {t("us.request_budget")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        locale={locale}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div
        onClick={() => setMenuOpen(false)}
        aria-label={t("other.close_menu")}
        className={
          menuOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </>
  );
}

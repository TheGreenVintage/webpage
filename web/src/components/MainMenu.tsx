import React from "react";
import Link from "next/link";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";

type Props = {
  locale: Locale;
};

const MainMenu = ({ locale }: Props) => {
  const t = tl(locale);
  const n = nl(locale);

  return (
    <nav id="bd-mobile-menu">
      <ul>
        <li>
          <Link href={n("projects")} rel="dofollow">
            {t("sections.projects")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href={n("services")} rel="dofollow">
            {t("sections.services")}
          </Link>
          <ul className="sub-menu">
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
        </li>
        <li className="menu-item-has-children">
          <Link href={n("team")} rel="dofollow">
            {t("sections.team")}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href={n("team")} rel="dofollow">
                {t("sections.members")}
              </Link>
            </li>
            <li>
              <Link href={n("manifest")} rel="dofollow">
                {t("sections.manifest")}
              </Link>
            </li>
            <li>
              <Link href={n("sustainability")} rel="dofollow">
                {t("sections.sustainability")}
              </Link>
            </li>
          </ul>
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
    </nav>
  );
};

export default MainMenu;

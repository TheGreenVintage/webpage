"use client";

import imgproxyLoader from "@/lib/imgproxyLoader";
import { Locale, tl } from "@/lib/locale";
import { PictureType } from "../DynamicContentPage";

type Props = {
  locale: Locale;
  title: string;
  url: string;
  background: PictureType;
};

export default function HeroVideo({ locale, title, url, background }: Props) {
  const t = tl(locale);
  const backgroundImageUrl = imgproxyLoader({
    src: background.url,
    width: background.width,
    quality: 50,
  });

  return (
    <section
      className="bd-video-area"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="container">
        <div className="row justify-content-center pt-120 pb-120">
          <div className="col-lg-12">
            <div className="bd-video-text text-center">
              <h2 className="bd-video-title mb-45">{title}</h2>
              <div className="bd-video-icon position-relative">
                <a
                  href={url}
                  className="popup-video"
                  target="_blank"
                  aria-label={t("other.open_video")}
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

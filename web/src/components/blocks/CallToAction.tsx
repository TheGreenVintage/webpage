"use client";

import imgproxyLoader from "@/lib/imgproxyLoader";
import classNames from "classnames";
import { PictureType } from "../DynamicContentPage";

type Props = {
  title: string;
  url: string;
  callToAction: string;
  background: PictureType;
};

export default function CallToAction({
  title,
  url,
  callToAction,
  background,
}: Props) {
  const download = url.endsWith(".pdf");

  const backgroundImageUrl = imgproxyLoader({
    src: background.url,
    width: background.width,
    quality: 50,
  });

  return (
    <section
      className="bd-call-to-action-area"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="container">
        <div className="row justify-content-center pt-150 pb-150">
          <div className="col-lg-12">
            <div className="bd-call-to-action-text text-center">
              <h2 className="bd-call-to-action-title mb-45">{title}</h2>
              <div className="bd-call-to-action-btn position-relative">
                <a
                  href={url}
                  className={classNames("theme-btn", {
                    "plausible-event-name=Download+Brochure": download,
                  })}
                  target={download ? "_blank" : "_self"}
                  download={download}
                >
                  {callToAction}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import classNames from "classnames";
import Image from "next/image";
import { PictureType } from "../DynamicContentPage";

type Props = {
  pretitle: string;
  title: string;
  description: string;
  picture: PictureType;
  callToActionLabel: string;
  callToActionUrl: string;
};

export default function SinglePictureDetail({
  pretitle,
  title,
  description,
  picture,
  callToActionLabel,
  callToActionUrl,
}: Props) {
  const { url: imageUrl, width, height } = picture;
  const download = callToActionUrl.endsWith(".pdf");

  return (
    <div className="bd-about-shape-box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="bd-about-img mb-30">
              <Image
                src={imageUrl}
                className="xss-w-full rounded-10"
                alt={title}
                width={width ?? 0}
                height={height ?? 0}
                style={{ width: 550, height: "auto" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="bd-about-text mb-30 pt-95 z-index">
              <div className="bd-section-title-wrapper">
                <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
                <h2 className="bd-section-title mb-25 md-pr-50">{title}</h2>
                <p className="mb-40">{description}</p>
                {callToActionLabel && callToActionUrl && (
                  <a
                    href={callToActionUrl}
                    className={classNames("theme-btn", {
                      "plausible-event-name=Download+Brochure": download,
                    })}
                    target={download ? "_blank" : "_self"}
                    download={download}
                  >
                    {callToActionLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

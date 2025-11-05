import { ComponentBlocksSubservice } from "@/generated/graphql";
import Image from "next/image";
import { PictureType } from "../DynamicContentPage";
import Icon from "../Icon";

type Props = {
  pretitle: string;
  title: string;
  description: string;
  picture1: PictureType;
  picture2: PictureType;
  subservices: Array<Omit<ComponentBlocksSubservice, "id">>;
};

export default function DoublePictureDetail({
  pretitle,
  title,
  description,
  picture1,
  picture2,
  subservices,
}: Props) {
  const { url: imageUrl1, alternativeText: alternativeText1 } = picture1;
  const { url: imageUrl2, alternativeText: alternativeText2 } = picture2;

  return (
    <div className="bd-about-shape-box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="bd-about-img mb-30">
              <Image
                src={imageUrl1}
                className="xss-w-full rounded-10"
                alt={alternativeText1 ?? title}
                width={370}
                height={500}
              />
              <Image
                className="bd-about-seconday-img rounded-10"
                src={imageUrl2}
                alt={alternativeText2 ?? title}
                width={380}
                height={550}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="bd-about-text mb-30 pt-95 z-index">
              <div className="bd-section-title-wrapper">
                <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
                <h2 className="bd-section-title mb-25 md-pr-50">{title}</h2>
                <p className="mb-40">{description}</p>
                <div className="row pb-15">
                  {subservices
                    .filter((subservice) => subservice)
                    .map((subservice, index) => {
                      return (
                        <div key={index} className="col-sm-6">
                          <div className="bd-about-service-four mb-25">
                            <div className="bd-about-service-four-icon">
                              <Icon name={subservice.icon} />
                            </div>
                            <div className="bd-about-service-four-text">
                              <h5>{subservice.title}</h5>
                              <p>{subservice.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

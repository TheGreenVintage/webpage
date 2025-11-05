"use client";

import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import chunk from "lodash/chunk";

type LogoType = {
  name: string;
  url: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
};

type Props = {
  pretitle: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  logos: LogoType[];
};

export default function Logos({ pretitle, title, description, logos }: Props) {
  const pairs = chunk(logos, 2);
  const logoSize = 90;

  return (
    <section className="bd-brand-area-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="col-12">
              <div className="bd-section-title-wrapper mb-50">
                <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
                <h2 className="bd-section-title mb-25">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-6 pt-10">
            <div className="bd-brand-active-two swiper-container">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={50}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                    },
                    550: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                  className="mySwiper"
                >
                  {pairs.map(([logo1, logo2]) => (
                    <SwiperSlide key={logo1.name}>
                      <div className="bd-brand-single">
                        <div className="bd-brand-item">
                          <Image
                            width={Math.round(
                              (logoSize * logo1.image.width) /
                                logo1.image.height,
                            )}
                            height={logoSize}
                            style={{ height: "auto" }}
                            src={logo1.image.url}
                            alt={logo1.name}
                          />
                        </div>
                        <div className="bd-brand-item">
                          {logo2 && (
                            <Image
                              width={Math.round(
                                (logoSize * logo2.image.width) /
                                  logo2.image.height,
                              )}
                              height={logoSize}
                              style={{ height: "auto" }}
                              src={logo2.image.url}
                              alt={logo2.name}
                            />
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

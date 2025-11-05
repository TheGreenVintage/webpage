"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { PictureType } from "./DynamicContentPage";

type HeroSlide = {
  url: string;
  picture: PictureType;
  blurDataURL: string | null;
};

type HeroSliderProps = {
  slides: HeroSlide[];
  priority: boolean;
};

const HeroSlider = ({ slides, priority = false }: HeroSliderProps) => {
  return (
    <div className="bd-portfolio-area fix">
      <div className="containers">
        <div className="bd-portfolio-active-seven z-index">
          <div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiperA"
            >
              {slides.map((item, num) => {
                const blurOptions = item.blurDataURL
                  ? {
                      placeholder: "blur" as const,
                      blurDataURL: item.blurDataURL,
                    }
                  : {};

                return (
                  <SwiperSlide key={item.picture.url}>
                    <div className="bd-portfolio-item-five">
                      <Link href={item.url}>
                        <Image
                          src={item.picture.url}
                          width={934}
                          height={1400}
                          style={{ width: "100%", height: "auto" }}
                          alt={item.picture.alternativeText}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={85}
                          priority={priority && num < 5}
                          {...blurOptions}
                        />
                      </Link>
                      <div className="bd-portfolio-item-five-text">
                        <Link href={item.url}>
                          <i className="fal fa-plus"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

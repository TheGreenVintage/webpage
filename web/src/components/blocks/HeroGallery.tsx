"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PictureType } from "../DynamicContentPage";

type Props = {
  pretitle: string;
  title: string;
  description: string;
  items: Item[];
};

type Item = {
  image: PictureType;
  url?: string | null;
  tag?: string | null;
  title?: string | null;
};

export default function HeroGallery({
  pretitle,
  title,
  description,
  items,
}: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bd-section-title-wrapper text-center mb-50">
            <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
            <h2 className="bd-section-title mb-25">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="bd-portfolio-active-two">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={false}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            el: ".portfolios-pagination-a",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
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
          className="mySwiperA"
        >
          {items.map(({ image, url, tag, title }, index) => (
            <SwiperSlide key={index}>
              <div className="bd-portfolio stable mb-30">
                <Image
                  src={image.url}
                  width={400}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ width: "100%" }}
                  alt={image.alternativeText ?? title}
                />
                <div className="bd-portfolio-text">
                  {tag && <span>{tag}</span>}
                  {title && (
                    <h5 className="bd-portfolio-title">
                      {url ? <Link href={url}>{title}</Link> : title}
                    </h5>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="portfolios-pagination-a portfolio-dots"></div>
      </div>
    </div>
  );
}

"use client";

import React from "react";

import "swiper/css/bundle";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { PictureType } from "../DynamicContentPage";

type TestimonialType = {
  name: string;
  role: string;
  description: string;
  avatar: PictureType;
};

type Props = {
  testimonials: TestimonialType[];
};

export default function Testimonials({ testimonials }: Props) {
  return (
    <section className="bd-testimonial-area gray-bg pt-100 pb-100 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="bd-testimonial testimonial-text mb-50">
              <div>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  freeMode={false}
                  watchSlidesProgress={true}
                  autoplay={{
                    delay: 8000,
                  }}
                >
                  {testimonials.map(({ name, role, description }) => {
                    return (
                      <SwiperSlide key={name}>
                        <div className="bd-testimonial-item text-center">
                          <div className="bd-testimonial-icon mb-45">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <p className="mb-25">{description}</p>
                          <h3 className="bd-testimonial-title">{name}</h3>
                          <span>{role}</span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className=" testimonial-nav">
              <div>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={3}
                  centeredSlides={true}
                  watchSlidesProgress={false}
                  autoplay={{
                    delay: 8000,
                  }}
                >
                  {testimonials.map(({ name, avatar }) => (
                    <SwiperSlide key={name}>
                      <div className="bd-testimonial-img">
                        <Image
                          src={avatar.url}
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto" }}
                          alt={avatar.alternativeText ?? name}
                        />
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

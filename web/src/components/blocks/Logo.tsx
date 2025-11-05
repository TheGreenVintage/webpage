"use client";

import Link from "next/link";
import { LogoType } from "@/loaders/home";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

type Props = {
  logo: LogoType;
};

export default function Logo({ logo }: Props) {
  const { name, url, image } = logo;
  const { url: imageUrl } = image;

  return (
    <SwiperSlide>
      <div className="bd-brand-single swiper-slide">
        <div className="bd-brand-item text-center text-md-end mb-40">
          <Link href={url} target="_blank" rel="nofollow">
            <Image src={imageUrl} alt={name} width={200} height={100} />
          </Link>
          <Link href={url} target="_blank" rel="nofollow">
            <Image src={imageUrl} alt={name} width={200} height={100} />
          </Link>
        </div>
      </div>
    </SwiperSlide>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import imgproxyLoader from "../lib/imgproxyLoader";

type Props = React.ComponentProps<typeof Image>;

export default function ImgproxyImage({
  src,
  width,
  height,
  alt,
  style,
  sizes,
  priority,
}: Props) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      style={style}
      sizes={sizes}
      priority={priority}
      loader={imgproxyLoader}
    />
  );
}

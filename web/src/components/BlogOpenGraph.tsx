import React from "react";
import { ImageResponse } from "next/og";
import { truncate } from "lodash";

type Props = {
  size: { width: number; height: number };
  post: any;
};

export default function blogOpenGraphImage({ size, post }: Props) {
  const { title, cover } = post;
  const { url: imageUrl } = cover;
  const brandColor = "#66ac82";
  const truncatedTitle = truncate(title, { length: 70 });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderBottomWidth: "20px",
          borderStyle: "solid",
          borderColor: brandColor,
          position: "relative",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: -200,
            objectFit: "cover",
            width: "100%",
            opacity: 1,
          }}
        />
        <img
          src="https://www.thegreenvintage.com/assets/img/logo/logo-black.png"
          alt=""
          width={90}
          height={80}
          style={{ position: "absolute", right: 55, bottom: 50 }}
        />
        <p
          style={{
            position: "absolute",
            bottom: -10,
            lineHeight: 1,
            left: 30,
            maxWidth: 800,
            color: brandColor,
          }}
        >
          {truncatedTitle}
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}

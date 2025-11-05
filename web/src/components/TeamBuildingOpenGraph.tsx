import React from "react";
import { ImageResponse } from "next/og";
import { tl, Locale } from "@/lib/locale";

type Props = {
  size: { width: number; height: number };
  locale: Locale;
  teamBuilding: any;
};

export default function teamBuildingOpenGraphImage({
  size,
  locale,
  teamBuilding,
}: Props) {
  const { title, cover, accessible, duration, language, localization } =
    teamBuilding;
  const { url: imageUrl } = cover;
  const t = tl(locale);
  const brandColor = "#66ac82";

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
            bottom: 50,
            left: 30,
            color: brandColor,
            fontWeight: "bold",
          }}
        >
          {title}
        </p>
        <p
          style={{
            position: "absolute",
            bottom: 10,
            left: 30,
            color: "#666",
            fontSize: 22,
          }}
        >
          <span style={{ fontWeight: "bold", paddingRight: 10 }}>
            {t("team-building.duration")}:
          </span>
          <span style={{ paddingRight: 30 }}>{duration}h</span>
          <span style={{ fontWeight: "bold", paddingRight: 10 }}>
            {t("team-building.languages")}:
          </span>
          <span style={{ paddingRight: 30 }}>
            {language
              .map((l: string) => t(`team-building.languages_values.${l}`))
              .join(", ")}
          </span>
        </p>
        <p
          style={{
            position: "absolute",
            bottom: -28,
            left: 30,
            color: "#666",
            fontSize: 22,
          }}
        >
          <span style={{ fontWeight: "bold", paddingRight: 10 }}>
            {t("team-building.accessible")}:
          </span>
          <span style={{ paddingRight: 30 }}>
            {accessible
              ? t("team-building.accessible_yes")
              : t("team-building.accessible_no")}
          </span>
          <span style={{ fontWeight: "bold", paddingRight: 10 }}>
            {t("team-building.localization")}:
          </span>
          <span style={{ paddingRight: 30 }}>{localization}</span>
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}

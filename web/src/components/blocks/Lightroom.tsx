"use client";

import imgproxyLoader from "@/lib/imgproxyLoader";
import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox, { Render, SlideImage } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";
import { PictureType } from "../DynamicContentPage";

interface LightroomProps {
  images: PictureType[];
}

function isNextJsImage(slide: SlideImage) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

const NextJsImageSlide: Render["slide"] = ({ slide, offset, rect }) => {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide) || !slide.width || !slide.height) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height),
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        //placeholder={slide.blurDataURL ? "blur" : undefined}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
};

const rowSlide = (total: number) => {
  if (total <= 4) return total;
  if (total < 8) return 4;
  if (total < 12) return 8;

  return 12;
};

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048];

export default function Lightroom({ images }: LightroomProps) {
  const [index, setIndex] = React.useState(-1);

  const slides = images.map(({ alternativeText, url: src, width, height }) => ({
    alt: alternativeText,
    width,
    height,
    src,
    // For the lightbox
    srcSet: imageSizes
      .concat(...deviceSizes)
      .filter((size) => size <= width)
      .map((size) => ({
        src: imgproxyLoader({ src, width: size }),
        width: size,
        height: Math.round((height / width) * size),
      })),
  }));

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={slides.slice(0, rowSlide(slides.length))}
        rowConstraints={{ maxPhotos: 4 }}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
        renderPhoto={({
          wrapperStyle,
          photo,
          layout,
          imageProps: { sizes, className, onClick },
        }) => (
          <div
            className="gallery-zoom"
            style={{
              ...wrapperStyle,
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Image
              fill
              src={photo.src}
              placeholder={"blurDataURL" in photo ? "blur" : undefined}
              {...{
                alt: photo.alt ?? "",
                title: photo.alt ?? "",
                sizes,
                className,
                onClick,
              }}
            />
            <div
              className="gallery-zoom-text"
              onClick={() => setIndex(layout.index)}
            >
              <span>
                <i className="fal fa-plus"></i>
              </span>
            </div>
          </div>
        )}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImageSlide }}
        plugins={[Thumbnails]}
        thumbnails={{ position: "bottom", width: 100, height: 100 }}
      />
    </>
  );
}

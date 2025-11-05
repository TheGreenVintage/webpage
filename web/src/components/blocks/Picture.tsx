import Image from "next/image";

type Size = "micro" | "small" | "medium" | "large" | "fullwidth";

type PictureProps = {
  picture: {
    url: string;
    alternativeText?: string;
    caption?: string;
  };
  size: Size | undefined | null;
};

const properties = {
  micro: {
    rowClass: "col-lg-8 offset-lg-2 col-md-12",
    imageStyle: { width: "25%", borderRadius: 10 },
    width: 300,
    height: 200,
  },
  small: {
    rowClass: "col-lg-8 offset-lg-2 col-md-12",
    imageStyle: { width: "50%", borderRadius: 10 },
    width: 600,
    height: 400,
  },
  medium: {
    rowClass: "col-lg-8 offset-lg-2 col-md-12",
    imageStyle: { width: "75%", borderRadius: 10 },
    width: 800,
    height: 600,
  },
  large: {
    rowClass: "col-lg-8 offset-lg-2 col-md-12",
    imageStyle: { width: "100%", borderRadius: 10 },
    width: 800,
    height: 600,
  },
  fullwidth: {
    rowClass: "col-12",
    imageStyle: { width: "100%" },
    width: 3200,
    height: 1800,
  },
} as const;

export default function Picture({ picture, size }: PictureProps) {
  const { url: imageUrl, alternativeText, caption } = picture;
  const { rowClass, imageStyle, width, height } = properties[size ?? "medium"];

  return (
    <div className="row">
      <div className={rowClass}>
        <figure style={{ textAlign: "center" }}>
          <Image
            className="img-fluid"
            src={imageUrl}
            alt={alternativeText || ""}
            style={imageStyle}
            width={width}
            height={height}
          />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      </div>
    </div>
  );
}

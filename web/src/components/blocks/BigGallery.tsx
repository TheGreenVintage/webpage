import Image from "next/image";
import { PictureType } from "../DynamicContentPage";

type GalleryProps = {
  media: PictureType[];
};

export default function BigGallery({ media }: GalleryProps) {
  const className = (index: number) =>
    `${index === 0 ? "col-lg-8" : "col-lg-4"} col-md-6 grid-item`;

  const imageStyle = (index: number) => {
    if (index === 2 || index === 3 || index === 4) {
      return { width: "100%", height: 275, objectFit: "cover" } as const;
    }

    return { width: "100%", height: 600, objectFit: "cover" } as const;
  };

  return (
    <div className="container">
      <div className="row">
        {media.map((item, index) => {
          const style = imageStyle(index);
          const width = Math.round(style.height * (item.width / item.height));

          return (
            <div key={index} className={className(index)}>
              <div className="bd-portfolio mb-30">
                <Image
                  src={item.url}
                  width={width}
                  height={style.height}
                  style={style}
                  alt={item.alternativeText}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

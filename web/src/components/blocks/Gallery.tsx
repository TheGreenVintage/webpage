import { PictureType } from "../DynamicContentPage";
import Lightroom from "./Lightroom";

type GalleryProps = {
  media: PictureType[];
};

export default function Gallery({ media }: GalleryProps) {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8 not-format">
          <Lightroom images={media} />
        </div>
      </div>
    </div>
  );
}

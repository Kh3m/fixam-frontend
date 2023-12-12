import { useState } from "react";
import VerticalSlides from "./ImageCourosel/VerticalSlides";
import { ImageType } from "../utils/types";

interface Props {
  images: ImageType[];
  styles?: string;
}

const Preview = ({ images, styles }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`${styles} flex  space-x-3 `}>
      <div className=" max-w-[15%] h-[490px]">
        <VerticalSlides
          images={images}
          activeIndex={activeIndex}
          handleActiveIndex={handleActiveIndex}
        />
      </div>
      <div className="h-[490px] w-[85%]">
        <img
          src={images[activeIndex].src}
          alt={`Preview ${images[activeIndex].alt}`}
          className="h-full w-full rounded-lg "
        />
      </div>
    </div>
  );
};

export default Preview;

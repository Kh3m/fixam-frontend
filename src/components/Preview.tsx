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
    <div
      className={`${styles} flex flex-col-reverse md:flex-row 
      md:space-x-3 `}
    >
      <div className="md:max-w-[15%] md:h-[490px] my-6 md:my-0">
        <VerticalSlides
          images={images}
          activeIndex={activeIndex}
          handleActiveIndex={handleActiveIndex}
        />
      </div>
      <div className="h-[490px] md:w-[85%] w-full">
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

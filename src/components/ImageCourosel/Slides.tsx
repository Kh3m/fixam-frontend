import ImageSlide from "./ImageSlide";
import { ImageType } from "../../utils/types";

interface Props {
  direction: "vertical" | "horizontal";
  images: ImageType[];
  activeIndex: number;
  handleActiveIndex: (index: number) => void;
}

const Slides = ({
  direction,
  activeIndex,
  handleActiveIndex,
  images,
}: Props) => {
  return (
    <section className={`${direction === "vertical" ? "flex-col" : ""} flex `}>
      {images.map((image, index) => (
        <ImageSlide
          key={index}
          image={image}
          handleActiveIndex={() => handleActiveIndex(index)}
          isActive={activeIndex === index}
        />
      ))}
    </section>
  );
};

export default Slides;

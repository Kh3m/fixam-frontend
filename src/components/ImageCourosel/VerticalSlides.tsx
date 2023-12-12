import { ImageType } from "../../utils/types";
import Slides from "./Slides";

interface Props {
  handleActiveIndex: (index: number) => void;
  activeIndex: number;
  images: ImageType[];
}
const VerticalSlides = ({ images, activeIndex, handleActiveIndex }: Props) => {
  return (
    <Slides
      direction="vertical"
      images={images}
      activeIndex={activeIndex}
      handleActiveIndex={handleActiveIndex}
    />
  );
};

export default VerticalSlides;

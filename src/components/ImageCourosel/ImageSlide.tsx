import { ImageType } from "../../utils/types";

interface Props {
  image: ImageType;
  isActive?: boolean;
  handleActiveIndex: (index: number) => void;
}
const ImageSlide = ({ image, handleActiveIndex, isActive }: Props) => {
  return (
    <div
      onClick={() =>
        handleActiveIndex(
          0
          /* 0 is just passed in to be able to execute the function
            The actual value is passed from Slides component since
            it has the index avalaible 
          */
        )
      }
      className={`${
        isActive && "scale-95 border-4 border-fyellow rounded-lg"
      } h-[112px]  mb-3 cursor-pointer transition duration-500 `}
    >
      <img
        {...image}
        className={`${!isActive && "rounded-lg"} w-full h-full object-cover`}
      />
    </div>
  );
};

export default ImageSlide;

import { PropsWithChildren, useRef } from "react";
import { DirectionType } from "../utils/types";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Flex from "./Flex";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props extends DirectionType {
  itemsLength: number;
}

const Scroll = ({
  direction,
  itemsLength,
  children,
}: PropsWithChildren<Props>) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 250;
      console.log(
        "INSIDE scrollContainerRef.current",
        scrollContainerRef.current.scrollLeft
      );
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 250;
      console.log(
        "INSIDE scrollContainerRef.current",
        scrollContainerRef.current.scrollLeft
      );
    }
  };
  return (
    <div
      className={` 
        ${direction === "vertical" && "flex-col"}
        flex relative
    `}
    >
      {itemsLength >= 5 && (
        <motion.span
          initial={{ y: -50, scale: 0.9 }}
          whileHover={{ scale: 1 }}
          onClick={scrollLeft}
          className="h-12 w-12 font-bold dark:bg-slate-200 bg-slate-100 rounded-full flex justify-center items-center
        absolute -left-6 top-[50%] translate-y-[-50%] z-20 text-2xl fshadow cursor-pointer"
        >
          {/* Left Icon */}
          <FaChevronLeft />
        </motion.span>
      )}
      {itemsLength >= 5 && (
        <motion.span
          initial={{ y: -50, scale: 0.9 }}
          whileHover={{ scale: 1 }}
          onClick={scrollRight}
          className="h-12 w-12 font-bold dark:bg-slate-200 bg-slate-100 rounded-full flex
        justify-center items-center absolute -right-6 top-[50%] translate-y-[-50%] z-20
        text-2xl fshadow cursor-pointer"
        >
          {/* Right Icon */}
          <FaChevronRight />
        </motion.span>
      )}

      <Flex ref={scrollContainerRef}>{children}</Flex>
    </div>
  );
};

export default Scroll;

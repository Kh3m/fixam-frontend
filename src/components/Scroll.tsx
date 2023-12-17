import { PropsWithChildren, useRef } from "react";
import { DirectionType } from "../utils/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Flex from "./Flex";
import { motion } from "framer-motion";

const Scroll = ({ direction, children }: PropsWithChildren<DirectionType>) => {
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
      <motion.span
        initial={{ y: -50, scale: 0.9 }}
        whileHover={{ scale: 1 }}
        onClick={scrollLeft}
        className="h-12 w-12 font-bold dark:bg-slate-200 bg-slate-100 rounded-full flex justify-center items-center
      absolute -left-6 top-[50%] translate-y-[-50%] z-20 text-2xl fshadow cursor-pointer"
      >
        <FaChevronLeft />
      </motion.span>
      <motion.span
        initial={{ y: -50, scale: 0.9 }}
        whileHover={{ scale: 1 }}
        onClick={scrollRight}
        className="h-12 w-12 font-bold dark:bg-slate-200 bg-slate-100 rounded-full flex justify-center items-center
      absolute -right-6 top-[50%] translate-y-[-50%] z-20 text-2xl fshadow cursor-pointer"
      >
        <FaChevronRight />
      </motion.span>

      <Flex ref={scrollContainerRef}>{children}</Flex>
    </div>
  );
};

export default Scroll;

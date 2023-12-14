import { PropsWithChildren, useRef } from "react";
import { DirectionType } from "../utils/types";

const Scroll = ({ direction, children }: PropsWithChildren<DirectionType>) => {
  const divRef = useRef<HTMLDivElement>(null);
  //   const [width, setWidth] = useState(0);

  //   useEffect(() => {
  //     setWidth(
  //       (divRef.current?.scrollWidth || 0) - (divRef.current?.offsetWidth || 0)
  //     );
  //   }, []);

  return (
    <div
      ref={divRef}
      className={` 
        ${direction === "vertical" && "flex-col"}
        flex relative cursor-grabbing
        after:absolute after:right-0 after:h-full
        after:bg-black after:w-6 after:z-10 after:blur-lg

        before:absolute before:left-0 before:h-full 
        before:bg-black before:w-6 before:z-10 before:blur-lg
    `}
    >
      {children}
    </div>
  );
};

export default Scroll;

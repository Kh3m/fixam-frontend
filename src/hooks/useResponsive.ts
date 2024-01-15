import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useResponsive = (breakpoint: Breakpoint) => {
  const [isScreenSize, setIsScreenSize] = useState<boolean>(false);

  useEffect(() => {
    const handleScreenSizeChange = () => {
      setIsScreenSize(window.innerWidth >= breakpoints[breakpoint]);
    };

    handleScreenSizeChange(); // Initial check

    window.addEventListener("resize", handleScreenSizeChange);

    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, [breakpoint]);

  return isScreenSize;
};

export default useResponsive;

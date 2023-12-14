import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    setIsDarkMode(darkModeMediaQuery.matches);

    const darkModeChangeListener = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", darkModeChangeListener);

    return () => {
      darkModeMediaQuery.removeEventListener("change", darkModeChangeListener);
    };
  }, []);

  return {
    isDarkMode,
  };
};
export default useDarkMode;

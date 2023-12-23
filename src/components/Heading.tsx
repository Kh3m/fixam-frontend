import { PropsWithChildren } from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  styles?: string;
}
const Heading = ({ variant, styles, children }: PropsWithChildren<Props>) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={`${styles ? styles : "text-6xl"} dark:text-white `}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${styles ? styles : "text-4xl"} dark:text-white`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${styles ? styles : "text-2xl"} dark:text-white`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`${styles ? styles : "text-lg"} dark:text-white`}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={`${styles ? styles : "text-md"} dark:text-white`}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={`${styles ? styles : "text-sm"} dark:text-white`}>
          {children}
        </h6>
      );
  }
};

export default Heading;

import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const CircledLink = ({
  to,
  styles,
  children,
}: PropsWithChildren<{ to: string; styles: string }>) => (
  <Link
    to={to}
    className={`${styles} h-8 w-8 rounded-full bg-white inline-flex justify-center items-center
  text-fyellow-shades-500`}
  >
    {children}
  </Link>
);
export default CircledLink;

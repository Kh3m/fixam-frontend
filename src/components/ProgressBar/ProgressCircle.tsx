import { PropsWithChildren } from "react";

interface Props {
  isActive?: boolean;
  label?: string;
}
const ProgressCircle = ({
  children,
  isActive,
  label,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`${
        isActive ? "bg-fyellow " : "bg-fgrey "
      }  text-white cursor-pointer text-lg h-12 w-12 rounded-full flex items-center justify-center`}
    >
      <span>{children}</span>
    </div>
  );
};

export default ProgressCircle;

import { PropsWithChildren } from "react";

interface Props {
  isActive?: boolean;
  handleStepClick?: (indexNumber: number) => void;
}
const ProgressCircle = ({
  children,
  isActive,
  handleStepClick,
}: PropsWithChildren<Props>) => {
  return (
    <div
      onClick={(e) => {
        const stepTo = Number.parseInt(
          `${(e.target as HTMLDivElement).textContent}`
        );

        if (handleStepClick) handleStepClick(stepTo);
      }}
      className={`${
        isActive ? "bg-fyellow " : "bg-fgrey "
      }  text-white cursor-pointer text-lg h-12 w-12 rounded-full flex items-center justify-center`}
    >
      <span>{children}</span>
    </div>
  );
};

export default ProgressCircle;

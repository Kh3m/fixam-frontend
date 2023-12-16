import { Fragment } from "react";
import Bar from "./Bar";
import ProgressCircle from "./ProgressCircle";

interface Props {
  stepName?: string;
  handleStepClick?: (stepIndex: number) => void;
}
const ProcessBar = ({ stepName, handleStepClick }: Props) => {
  const isActiveContact = stepName === "contact";
  const isActiveBrand = stepName === "brand";
  const isActiveSocials = stepName === "socials";

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <ProgressCircle
          label="Contact"
          isActive={isActiveContact || isActiveBrand || isActiveSocials}
          handleStepClick={handleStepClick}
        >
          1
        </ProgressCircle>
        <Bar isActive={isActiveBrand || isActiveSocials} />
        <ProgressCircle
          label="Brand"
          isActive={isActiveBrand || isActiveSocials}
          handleStepClick={handleStepClick}
        >
          2
        </ProgressCircle>
        <Bar isActive={isActiveSocials} />
        <ProgressCircle
          label="Socials"
          isActive={isActiveSocials}
          handleStepClick={handleStepClick}
        >
          3
        </ProgressCircle>
      </div>
      <div className="flex justify-between items-center">
        <span
          className={`${
            isActiveContact || isActiveBrand || isActiveSocials
              ? "text-fyellow"
              : "text-fgrey"
          }  my-1`}
        >
          Contact
        </span>
        <span
          className={`${
            isActiveBrand || isActiveSocials ? "text-fyellow" : "text-fgrey"
          } my-1`}
        >
          Brand
        </span>
        <span
          className={`${isActiveSocials ? "text-fyellow" : "text-fgrey"} my-1`}
        >
          Socials
        </span>
      </div>
    </Fragment>
  );
};

export default ProcessBar;

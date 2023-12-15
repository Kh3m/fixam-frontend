import { Fragment } from "react";
import Bar from "./Bar";
import ProgressCircle from "./ProgressCircle";

interface Props {
  stepName: string;
}
const ProcessBar = ({ stepName }: Props) => {
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <ProgressCircle label="Contact" isActive={stepName === "contact"}>
          1
        </ProgressCircle>
        <Bar />
        <ProgressCircle label="Brand" isActive={stepName === "brand"}>
          2
        </ProgressCircle>
        <Bar />
        <ProgressCircle label="Socials" isActive={stepName === "socials"}>
          3
        </ProgressCircle>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-fyellow my-1">Contact</span>
        <span className="text-fgrey my-1">Brand</span>
        <span className="text-fgrey my-1">Socials</span>
      </div>
    </Fragment>
  );
};

export default ProcessBar;

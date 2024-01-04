import { MdAccessTime } from "react-icons/md";
import { LiaSortSolid } from "react-icons/lia";
import { BiSolidSortAlt } from "react-icons/bi";

import Button from "../Button";
import { useState } from "react";

import ascendingSVGImage from "../../assets/ascending.svg";
import decendingSVGImage from "../../assets/descending.svg";

const TimeSort = () => {
  const [ascending, setAscending] = useState(true);

  return (
    <Button
      onClick={() => setAscending(!ascending)}
      styles="flex items-center space-x-2 border border-fyellow px-1 rounded-md"
    >
      <span className="text-lg text-fyellow">
        <MdAccessTime />
      </span>
      <span>Time</span>

      <span className="text-lg text-fyellow">
        {/* <img
          src={ascendingSVGImage}
          className="h-32 w-32"
          alt="Sort time in ascending order"
        /> */}
        {
          <img
            src={ascending ? ascendingSVGImage : decendingSVGImage}
            alt="Sort time in ascending order"
            className="h-6 w-[14px]"
          />
        }
      </span>
    </Button>
  );
};

export default TimeSort;

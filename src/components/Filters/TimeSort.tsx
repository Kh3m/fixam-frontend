import { MdAccessTime } from "react-icons/md";
import { LiaSortSolid } from "react-icons/lia";
import { BiSolidSortAlt } from "react-icons/bi";

import Button from "../Button";
import { useState } from "react";

const TimeSort = () => {
  const [ascending, setAscending] = useState(true);

  return (
    <Button
      onClick={() => setAscending(!ascending)}
      styles="flex items-center space-x-2 border border-fyellow p-1 rounded-md"
    >
      <span className="text-lg text-fyellow">
        <MdAccessTime />
      </span>
      <span>Time</span>

      <span className="text-lg text-fyellow">
        {ascending ? <LiaSortSolid /> : <BiSolidSortAlt />}
      </span>
    </Button>
  );
};

export default TimeSort;

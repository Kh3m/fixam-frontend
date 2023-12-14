import { FaAngleDown } from "react-icons/fa6";

interface Props {
  toEnd?: boolean;
}
const Pagination = ({ toEnd }: Props) => {
  const activeStyle = "text-white bg-fyellow";
  return (
    <div
      className={`${toEnd && " justify-end"}  flex items-center space-x-1 my-2`}
    >
      <span className="cursor-pointer rotate-90 p-2 rounded-lg text-fdark-300 dark:bg-fdark-800 w-12 h-12 flex items-center justify-center">
        <FaAngleDown size={26} color="#6c6c6c" />
      </span>

      <span
        className={`${activeStyle} font-semibold pagination-shadow cursor-pointer p-2 rounded-lg  dark:bg-fdark-800 w-12 h-12 flex items-center justify-center`}
      >
        1
      </span>

      <span className=" font-semibold pagination-shadow cursor-pointer p-2 rounded-lg text-fdark-600 dark:bg-fdark-800 w-12 h-12 flex items-center justify-center">
        2
      </span>

      <span className="cursor-pointer -rotate-90 p-2 rounded-lg dark:text-fdark-300 dark:bg-fdark-800 w-12 h-12 flex items-center justify-center">
        <FaAngleDown size={26} color="#6c6c6c" />
      </span>
    </div>
  );
};

export default Pagination;

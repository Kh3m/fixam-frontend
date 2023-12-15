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
      <span className=" pagination-shadow cursor-pointer rotate-90 p-2 rounded-lg text-slate-200 dark:bg-slate-700 w-12 h-12 flex items-center justify-center">
        <FaAngleDown size={26} color="#c1c1c1" />
      </span>

      <span
        className={`${activeStyle} font-semibold pagination-shadow cursor-pointer p-2 rounded-lg  dark:bg-slate-700 w-12 h-12 flex items-center justify-center`}
      >
        1
      </span>

      <span className=" font-semibold pagination-shadow cursor-pointer p-2 rounded-lg text-slate-400 dark:bg-slate-700 w-12 h-12 flex items-center justify-center">
        2
      </span>

      <span className=" pagination-shadow cursor-pointer -rotate-90 p-2 rounded-lg dark:text-slate-200 dark:bg-slate-700 w-12 h-12 flex items-center justify-center">
        <FaAngleDown size={26} color="#c1c1c1" />
      </span>
    </div>
  );
};

export default Pagination;

// import RecommendedSelect from "./RecommendedSelect";
import TimeSort from "./TimeSort";

const SortFilter = () => {
  return (
    <div className="flex space-x-4 justify-end items-center dark:text-fgrey text-sm p-2">
      <span>Sort by: </span>
      {/* <RecommendedSelect /> */}
      <TimeSort />
    </div>
  );
};

export default SortFilter;

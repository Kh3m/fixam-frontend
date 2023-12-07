const SortFilter = () => {
  return (
    <div className="flex space-x-4 justify-end dark:text-fgrey text-sm p-2">
      <span>Sort by: </span>
      <span className="cursor-pointer">Recommended </span>
      <span className="cursor-pointer">Any time</span>
    </div>
  );
};

export default SortFilter;

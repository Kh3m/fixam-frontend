import Space from "../../../components/Space";

const SideBarSkeleton = () => {
  return (
    <div>
      <div className="w-36 h-36 rounded-full p-5 m-auto dark:bg-slate-800 bg-slate-300 animate-pulse"></div>
      <Space spacing="my-2" />
      <div className="h-4 w-32 m-auto rounded-lg dark:bg-slate-800 bg-slate-300 animate-pulse"></div>
      <Space spacing="my-14" />
      <ul className="my-5">
        {Array.from({ length: 6 }, (_, index) => (
          <li key={index} className="px-6 py-3">
            <div className="flex items-center cursor-pointer space-x-4">
              <span className="rounded-lg w-8 h-8 dark:bg-slate-800 bg-slate-300 animate-pulse"></span>
              <span className="h-11 w-full rounded-lg dark:bg-slate-800 bg-slate-300 animate-pulse"></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarSkeleton;

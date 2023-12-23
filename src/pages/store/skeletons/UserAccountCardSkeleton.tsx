import Card from "../../../components/Card";
import Space from "../../../components/Space";

const UserAccountCardSkeleton = () => {
  return (
    <Card styles="w-fit" notFullWidth>
      <div className="flex justify-center items-center space-x-4 ">
        <div className="h-14 w-14 rounded-lg dark:bg-slate-700 bg-slate-300 animate-pulse"></div>
        <div>
          <div className="w-14 h-3 rounded-md dark:bg-slate-700 bg-slate-300 animate-pulse"></div>
          <Space spacing="my-2" />
          <div className="w-24 h-3 rounded-md dark:bg-slate-700 bg-slate-300  animate-pulse"></div>
        </div>
        <div className="w-4 h-4 rounded-md dark:bg-slate-700 bg-slate-300 animate-pulse "></div>
      </div>
    </Card>
  );
};

export default UserAccountCardSkeleton;

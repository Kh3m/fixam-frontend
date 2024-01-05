import { FaStar } from "react-icons/fa6";

interface Props {
  count: number;
  withViews?: boolean;
}

const Rating = ({ count, withViews }: Props) => {
  return (
    <div className="flex items-center space-x-3">
      <div className=" flex space-x-1">
        {Array.from({ length: 5 }, () => (
          <span className={`${count <= 5 ? "text-fyellow" : "text-fgrey"}`}>
            <FaStar />
          </span>
        ))}
      </div>

      {withViews && (
        <span className="dark:text-fgrey font-semibold text-xs">
          (100 views)
        </span>
      )}
    </div>
  );
};

export default Rating;

import { Link, NavLink } from "react-router-dom";
import { LinkType } from "../../utils/types";

interface Props {
  withIcon?: boolean;
  item: LinkType;
}

const Navigation = ({ item: { icon, to, text } }: Props) => {
  return (
    <li className="">
      <NavLink
        to={to}
        className={({ isPending, isActive }) =>
          isPending
            ? "pending"
            : isActive
            ? "cursor-pointer text-white bg-fyellow px-6 py-3 block rounded-lg text-lg font-semibold fshadow"
            : "cursor-pointer dark:text-white text-black  px-6 py-3 block rounded-lg text-lg font-semibold"
        }
      >
        <div className="flex items-center cursor-pointer space-x-4">
          <span className="text-red-800">{icon}</span> <span>{text}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Navigation;

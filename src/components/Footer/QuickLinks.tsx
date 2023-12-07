import { Link } from "react-router-dom";
import { LinkType } from "../../uitls/DataTypes";

interface Props {
  links: LinkType[];
  title: string;
}

const QuickLinks = ({ links, title }: Props) => {
  return (
    <div>
      <h4 className="font-bold text-lg text-white my-6">{title}</h4>
      <ul>
        {links.map(({ to, text }) => (
          <li className=" text-sm text-white font-normal my-4">
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;

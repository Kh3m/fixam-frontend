import { Link } from "react-router-dom";
import { LinkType } from "../../uitls/DataTypes";

interface Props {
  links: LinkType[];
  title: string;
}

const QuickLinks = ({ links, title }: Props) => {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map(({ to, text }) => (
          <li>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;

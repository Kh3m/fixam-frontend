import { PropsWithChildren } from "react";
import CollapsibleButton from "./CollapsibleButton";
import { Link } from "react-router-dom";

interface Props {
  handleCollapse: () => void;
  collapes: boolean;
  to?: { path: string };
}
const CollapsibleHeader = ({
  children,
  collapes,
  handleCollapse,
  to,
}: PropsWithChildren<Props>) => {
  if (to)
    return (
      <header
        className="rounded-t-md px-5 py-3 text-gray-500 
        font-semibold flex justify-between items-center"
      >
        <Link to={to.path}>
          <span>{children}</span>
        </Link>
        <CollapsibleButton
          collapse={collapes}
          handleCollapse={handleCollapse}
        />
      </header>
    );

  return (
    <header
      className="pagination-shadow
      rounded-t-md px-5 py-3 text-gray-500 
    font-semibold flex justify-between items-center"
    >
      <span>{children}</span>
      <CollapsibleButton collapse={collapes} handleCollapse={handleCollapse} />
    </header>
  );
};

export default CollapsibleHeader;

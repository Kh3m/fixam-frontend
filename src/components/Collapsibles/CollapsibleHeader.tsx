import { PropsWithChildren } from "react";
import CollapsibleButton from "./CollapsibleButton";

interface Props {
  handleCollapse: () => void;
  collapes: boolean;
}
const CollapsibleHeader = ({
  children,
  collapes,
  handleCollapse,
}: PropsWithChildren<Props>) => {
  return (
    <header
      className="rounded-t-md px-5 py-3 text-gray-500 
    font-semibold flex justify-between items-center pagination-shadow"
    >
      <span>{children}</span>
      <CollapsibleButton collapse={collapes} handleCollapse={handleCollapse} />
    </header>
  );
};

export default CollapsibleHeader;

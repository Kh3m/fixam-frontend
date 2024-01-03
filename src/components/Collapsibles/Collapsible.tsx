import { PropsWithChildren, useState } from "react";
import CollapsibleHeader from "./CollapsibleHeader";
import { motion } from "framer-motion";

interface Props {
  headerName: string;
  to?: { path: string };
  noRightPadding?: boolean;
}
const Collapsible = ({
  children,
  headerName,
  to,
  noRightPadding,
}: PropsWithChildren<Props>) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => setCollapse(!collapse);

  return (
    <section className="bg-white">
      <CollapsibleHeader
        collapes={collapse}
        handleCollapse={handleCollapse}
        to={to}
      >
        {headerName}
      </CollapsibleHeader>
      <motion.div
        className="overflow-hidden  border border-t-0 border-gray-200 rounded-b-md"
        animate={collapse ? { height: "fit-content" } : { height: "0px" }}
      >
        <div className={`${!to && "p-5"} ${noRightPadding && "pr-0"}`}>
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default Collapsible;

import { motion } from "framer-motion";

interface Props {
  handleCollapse: () => void;
  collapse: boolean;
}

const CollapsibleButton = ({ collapse, handleCollapse }: Props) => {
  return (
    <motion.button
      onClick={handleCollapse}
      className="rounded-full bg-gray-300 relative h-5 w-5  flex items-center justify-center"
    >
      <div className="h-[2px] w-[10px] bg-gray-400 rounded-md absolute "></div>
      <motion.div
        animate={!collapse ? { rotate: -90 } : { rotate: 0 }}
        className="h-[2px] w-[10px] bg-gray-400 rounded-md absolute"
      ></motion.div>
    </motion.button>
  );
};

export default CollapsibleButton;

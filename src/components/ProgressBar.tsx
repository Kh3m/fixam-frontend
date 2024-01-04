import { motion } from "framer-motion";

interface Props {
  progress: number;
}
const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="bg-gray-300 relative h-2 rounded-lg w-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute h-full bg-fyellow-shades-500 rounded-lg"
      ></motion.div>
    </div>
  );
};

export default ProgressBar;

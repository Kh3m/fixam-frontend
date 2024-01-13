import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const TapEffect = ({ children, styles }: PropsWithChildren<Props>) => {
  return (
    <motion.div
      className={`${styles}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

export default TapEffect;

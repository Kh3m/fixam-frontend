import { motion } from "framer-motion";
import GoodCircle from "./GoodCircle";
import { OrderProgressType } from "./OrderProgress";

interface Props {
  progress: OrderProgressType;
}
const OrderProgressBar = ({ progress }: Props) => {
  return (
    <div className="relative h-6 bg-gray-300">
      <motion.div
        initial={{ backgroundColor: "#FF9900", width: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        animate={{
          width:
            progress === "confirmed"
              ? "30%"
              : progress === "route"
              ? "62%"
              : progress === "delivered"
              ? "100%"
              : "0%",
        }}
        className="h-6 bg-fyellow-shades-500 absolute"
      ></motion.div>
      <motion.div
        initial={{ left: "-1%" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        animate={{
          left:
            progress === "confirmed"
              ? "28%"
              : progress === "route"
              ? "60%"
              : progress === "delivered"
              ? "95%"
              : "-1%",
        }}
        className=" h-14 rounded-full flex justify-center
        items-center absolute top-[50%] -translate-y-[50%]"
      >
        <GoodCircle />
      </motion.div>
    </div>
  );
};

export default OrderProgressBar;

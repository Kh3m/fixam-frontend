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
        initial={{ backgroundColor: "#FF9900" }}
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
        animate={{
          left:
            progress === "confirmed"
              ? "28%"
              : progress === "route"
              ? "60%"
              : progress === "delivered"
              ? "94%"
              : "-1%",
        }}
        className=" h-14 w-14 rounded-full flex justify-center
        items-center absolute left-[27%] top-[50%] -translate-y-[50%]"
      >
        <GoodCircle />
      </motion.div>
    </div>
  );
};

export default OrderProgressBar;

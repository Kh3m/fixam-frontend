import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Backdrop from "./Backdrop";
import Logo from "../Logo";
import { useMenuSliderContext } from "../../contexts/menu-slider-context";

// const container = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       delayChildren: 0.1,
//       staggerChildren: 0.5,
//     },
//   },
// };

// const item = {
//   hidden: { x: 80, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//   },
// };

const MenuSlider = () => {
  const { menuState, closeMenu } = useMenuSliderContext();

  return (
    <>
      <Backdrop />
      <motion.div
        // variants={container}
        // initial="hidden"
        // animate={menuState.openMenu ? "visible":"hidden"}
        initial={{ x: -200, width: "85%" }}
        animate={{
          x: menuState.openMenu ? 0 : -200,
          width: menuState.openMenu ? "85%" : 0,
        }}
        className="overflow-hidden h-screen bg-white 
        fixed z-50 top-0 bottom-0 left-0"
      >
        <motion.section className="p-2">
          <div className="flex items-center">
            <IoClose size={38} onClick={closeMenu} />
            <Logo color={"yellow"} styles="w-12 m-2" />
          </div>
          <ul className="ml-6 my-6">
            <li>
              <span className="font-semibold">Popular Category</span>
              <ul className="ml-6">
                <li className=" my-3">Garden Supplies </li>
                <li className=" my-3">Garden Supplies </li>
                <li className=" my-3">Garden Supplies </li>
                <li className=" my-3">Garden Supplies </li>
              </ul>
            </li>
          </ul>
        </motion.section>
      </motion.div>
    </>
  );
};

export default MenuSlider;

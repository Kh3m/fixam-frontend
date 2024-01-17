import { motion } from "framer-motion";
import { useMenuSliderContext } from "../../contexts/menu-slider-context";

const Backdrop = () => {
  const { menuState, closeMenu } = useMenuSliderContext();

  return (
    <motion.div
      onClick={closeMenu}
      initial={{ width: 0 }}
      animate={{ width: menuState.openMenu ? "100%" : 0 }}
      className="bg-black/70 z-30 fixed top-0 left-0 bottom-0 w-full h-screen"
    ></motion.div>
  );
};

export default Backdrop;

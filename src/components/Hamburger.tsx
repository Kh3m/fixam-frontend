import { useMenuSliderContext } from "../contexts/menu-slider-context";

const Hamburger = () => {
  const { openMenu } = useMenuSliderContext();

  return (
    <div onClick={openMenu}>
      <div className="h-1 w-8 rounded-sm bg-white"></div>
      <div className="h-1 w-8 my-[0.4rem] rounded-sm bg-white"></div>
      <div className="h-1 w-8  rounded-sm bg-white"></div>
    </div>
  );
};

export default Hamburger;

import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Backdrop from "./Backdrop";
import Logo from "../Logo";
import { useMenuSliderContext } from "../../contexts/menu-slider-context";
import useCategories from "../../hooks/category/useCategories";
import { CategoryType } from "../../services/category";
import { getMainCategory } from "../../utils/category";
import { FetchResponseType } from "../../services/apiClient";
import MobileCategories from "../Categories/MobileCategories";

const MenuSlider = () => {
  const { menuState, closeMenu } = useMenuSliderContext();

  const { data: categories, isLoading } = useCategories();

  let mainCat: CategoryType[] = [];

  if (categories) {
    mainCat = getMainCategory(categories as FetchResponseType<CategoryType>);
  }

  console.log("MainCat", mainCat);
  // {!isLoading && categories && (
  //   <Container
  //     Aside={<Categories categories={categories} mainCat={mainCat} />}
  //     twoColLayout
  //   >
  //     {categories &&
  //       mainCat.length &&
  //       mainCat.map((cat) => (
  //         <FeaturedProducts
  //           key={cat.id}
  //           title={cat.name}
  //           to={`/${cat.name.toLocaleLowerCase()}`}
  //           categoryId={cat.id}
  //         />
  //       ))}
  //   </Container>
  // )}
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

          {!isLoading && categories && (
            <MobileCategories categories={categories} mainCat={mainCat} />
          )}
        </motion.section>
      </motion.div>
    </>
  );
};

export default MenuSlider;

import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import IconPlus from "../../components/IconPlus";
import AccessibleMenu from "../../components/Menu/AccessibleMenu";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex space-x-4 items-center">
      <div className=" flex-grow flex items-center space-x-4"></div>
      {/* <div
        className="dark:bg-slate-700 dark:text-slate-200 bg-white px-5 
        py-3 pagination-shadow rounded-md flex-grow flex items-center space-x-4"
      >
        <AccessibleMenu
          menuItems={["Category 1", "Category 2", "Category 3 Category 3"]}
        >
          Category
        </AccessibleMenu>

        {/* <AccessibleMenu menuItems={["Status 1", "Status 2", "Status 3"]}>
          Status
        </AccessibleMenu> */}

      {/* <AccessibleMenu menuItems={["Price 1", "Price 2", "Price 3"]}>
          Price
        </AccessibleMenu> */}
      {/* </div>  */}
      <Link to={`${pathname}/add-product`}>
        <Button
          noSizingClass
          variant="w-icon"
          styles="dark:bg-slate-800 bg-fyellow text-white text-sm font-semibold w-[250px] py-5"
        >
          <IconPlus />
          <span>Add Product</span>
        </Button>
      </Link>
    </div>
  );
};

export default TopBar;

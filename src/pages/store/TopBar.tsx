import MenuButton from "../../components/Menu/MenuButton";
import Button from "../../components/Button";
import IconPlus from "../../components/IconPlus";

const TopBar = () => {
  return (
    <div className="flex space-x-4 items-center">
      <div
        className="dark:bg-slate-700 dark:text-slate-200 bg-white px-5 py-3 pagination-shadow rounded-md 
      flex-grow flex items-center space-x-4"
      >
        <MenuButton
          items={["Category 1", "Category 2", "Category 3 Category 3"]}
        >
          Category
        </MenuButton>
        <MenuButton items={["Status 1", "Status 2", "Status 3"]}>
          Status
        </MenuButton>
        <MenuButton items={["Price 1", "Price 2", "Price 3"]}>Price</MenuButton>
      </div>
      <Button
        noSizingClass
        variant="w-icon"
        styles="dark:bg-slate-800 bg-fyellow text-white text-sm font-semibold w-[250px] py-5"
      >
        <IconPlus />
        <span>Add Product</span>
      </Button>
    </div>
  );
};

export default TopBar;

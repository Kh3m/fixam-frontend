import MenuButton from "../../components/Menu/MenuButton";
import Button from "../../components/Button";
import IconPlus from "../../components/IconPlus";

const TopBar = () => {
  return (
    <div className="flex space-x-4">
      <div
        className="dark:bg-fdark-800 dark:text-fdark-200 bg-white px-5 py-3 fshadow rounded-md 
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
        variant="w-icon"
        styles="dark:bg-slate-800 bg-fyellow text-white text-sm font-semibold w-[250px]"
      >
        <IconPlus />
        <span>Add Product</span>
      </Button>
    </div>
  );
};

export default TopBar;

import Button from "../../components/Button";
import Card from "../../components/Card";
import IconPlus from "../../components/IconPlus";

const TopBar = () => {
  return (
    <div className="flex space-x-4">
      <Card styles="flex-grow flex items-center space-x-4">
        <h3>Category</h3>
        <h3>Status</h3>
        <h3>Price</h3>
        <h3>Date</h3>
      </Card>
      <Button
        variant="w-icon"
        styles="bg-fyellow text-white text-sm font-semibold w-[250px]"
      >
        <IconPlus />
        <span>Add Product</span>
      </Button>
    </div>
  );
};

export default TopBar;

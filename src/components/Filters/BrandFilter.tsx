import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const brands = [
  {
    category: "Standard",
    count: "• 31 185 ads",
    selected: true,
  },
  {
    category: "Royal",
    count: "• 606 ads",
    selected: true,
  },
  {
    category: "Home Interiors",
    count: "• 65 724 ads",
    selected: true,
  },
  {
    category: "General",
    count: "• 18 983 ads",
    selected: true,
  },
  {
    category: "Boss Office Products",
    count: "• 11 376 ads",
    selected: true,
  },
  {
    category: "Zuo Modern",
    count: "• 87 ads",
    selected: true,
  },
];

const BrandFilter = () => {
  return (
    <Collapsible headerName="Brand">
      <FiltersWithInputField
        filters={brands}
        filterTitle="Brand"
        inputType="text"
        variant="checkbox"
        placeholder="Find Brand"
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default BrandFilter;

import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const brands = [
  {
    text: "Standard",
    count: "• 31 185 ads",
    selected: true,
  },
  {
    text: "Royal",
    count: "• 606 ads",
    selected: true,
  },
  {
    text: "Home Interiors",
    count: "• 65 724 ads",
    selected: true,
  },
  {
    text: "General",
    count: "• 18 983 ads",
    selected: true,
  },
  {
    text: "Boss Office Products",
    count: "• 11 376 ads",
    selected: true,
  },
  {
    text: "Zuo Modern",
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

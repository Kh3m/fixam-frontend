import { ChangeEvent } from "react";
import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";
import { useProductFilteringContext } from "../../contexts/product-filtering-context";

const types = [
  {
    text: "Show all",
    count: "",
    selected: true,
  },
  {
    text: "Sale",
    count: "",
    selected: true,
  },
  {
    text: "Rent",
    count: "",
    selected: true,
  },
];

const TypeFilter = () => {
  // const [value, setValue] = useState("");
  const {
    setFilteringType,
    filteringState: { filteringType },
  } = useProductFilteringContext();

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("filteringType", filteringType, value);
    switch (value) {
      case "Show all": {
        setFilteringType("Show all");
        break;
      }
      case "Rent": {
        setFilteringType("Rent");
        break;
      }
      case "Sale": {
        setFilteringType("Sale");
        break;
      }
    }
  };

  console.log("filteringType", filteringType);
  return (
    <Collapsible headerName="Type">
      <FiltersWithInputField
        filters={types}
        filterTitle="Type"
        inputType="text"
        onRadioChange={handleRadioChange}
        defaultValue={filteringType}
        variant="radio"
        placeholder="Find Type"
        readOnly={true}
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default TypeFilter;

import { useState } from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";

const customStyles: StylesConfig = {
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  control: (provided) => ({
    ...provided,
    height: "20px",
    minHeight: "20px",
    fontSize: "11px",
    width: "fit-content",
    border: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "20px",
  }),
  menu: (provided) => ({
    ...provided,
    width: "auto",
    fontSize: "11px",
    top: "12px",
  }),
  menuList: (base) => ({
    ...base,
    fontSize: "11px",
    height: "fit-content",
    width: "fit-content",
    overflowY: "hidden",
  }),
};

type Option = {
  value: string;
  label: string;
};

const QuantitiyOption = () => {
  const options: Option[] = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];
  const [selectedOption, setSelectedOption] = useState<Option>({
    value: "2",
    label: "QTY: 2",
  } as Option);

  const handleChange = (newValue: unknown, _: ActionMeta<unknown>) => {
    console.log(newValue);
    setSelectedOption({
      value: (newValue as Option).value,
      label: "QTY: " + (newValue as Option).label,
    });
  };
  return (
    <Select
      styles={customStyles}
      className="no-scrollbar"
      onChange={handleChange}
      value={selectedOption}
      options={options}
    />
  );
};

export default QuantitiyOption;

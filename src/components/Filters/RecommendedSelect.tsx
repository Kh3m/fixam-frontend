import Select, { StylesConfig } from "react-select";

const customStyles: StylesConfig = {
  control: (base, props) => ({
    ...base,
    borderColor: "#ff9900",
    cursor: "pointer",
    border: props.selectProps.menuIsOpen
      ? "1px solid #ff9900"
      : "1px solid #ff9900",
    height: "30px",
    fontSize: "16px",
    color: "#000",
    minHeight: "30px",
    width: "160px",
    ":hover": {
      border: "1px solid #ff9900",
    },
  }),

  input: (base) => ({
    ...base,
    padding: 0,
    margin: 0,
    fontSize: "12px",
  }),

  dropdownIndicator: (base, props) => ({
    ...base,
    padding: 0,
    paddingRight: "2px",
    color: "#616161",
    rotate: props.selectProps.menuIsOpen ? "180deg" : "0",
  }),

  indicatorSeparator: (base) => ({ ...base, display: "none" }),

  option: (base, props) => ({
    ...base,
    backgroundColor: props.isSelected ? "#FF9900" : "",
    ":hover": {
      background: props.isSelected ? "#FF9900" : "#ffe685",
      color: props.isSelected ? "white" : "black",
    },
  }),
};
const RecommendedSelect = () => {
  return (
    <Select
      defaultValue={{
        label: "Recommeded",
        value: "Recommeded",
      }}
      options={[
        {
          label: "Recommeded",
          value: "Recommeded",
        },
        {
          label: "Popular",
          value: "Popular",
        },
        {
          label: "High price",
          value: "High price",
        },
        {
          label: "Low price",
          value: "Low price",
        },
        {
          label: "Rating",
          value: "Rating",
        },
      ]}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default RecommendedSelect;

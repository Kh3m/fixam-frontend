import { Link } from "react-router-dom";
import CheckBox from "../CheckBox";
import Heading from "../Heading";
import RadioButton from "../RadioButton";
import SubCategoryFilter from "./SubCategoryFilter";

interface Props {
  variant?: "checkbox" | "radio";
  text: string;
  count: number | string;
  selected?: boolean;
  isFor: string;
}
const FilterListItem = ({ variant, text, count, selected, isFor }: Props) => {
  switch (variant) {
    case "radio":
      return (
        <li className="text-sm my-2 cursor-pointer dark:text-white">
          <RadioButton text={text} radioFor={isFor} />
          <span className="text-fgrey"> {count}</span>
        </li>
      );
    case "checkbox":
      return (
        <li className="text-sm my-2 cursor-pointer">
          <CheckBox text={text} boxFor={isFor} />
          <span className="text-fgrey"> {count}</span>
        </li>
      );
  }
};

export default FilterListItem;

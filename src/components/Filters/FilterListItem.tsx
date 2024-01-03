import { Link } from "react-router-dom";
import CheckBox from "../CheckBox";
import Heading from "../Heading";
import RadioButton from "../RadioButton";

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
    default:
      return (
        <li className="text-sm my-2 group/subcat">
          <Link
            to={`#C`}
            className="hover:text-fyellow-shades-400 hover:border-dotted"
          >
            <span className={`${selected && "font-semibold"}`}>{text}</span>
          </Link>
          <span className="text-fgrey"> {count}</span>

          {/* Sub Categories for main category sub category */}
          <ul
            className="w-0 overflow-x-hidden h-full pagination-shadow  
            top-0 bg-white absolute z-40 left-[100%]
            group-hover/subcat:w-full
            transition-all duration-200"
          >
            <div className=" p-5">
              <Heading variant="h4" styles="text-lg font-medium">
                {text}
              </Heading>
              <Link
                to={`In#`}
                className="hover:text-fyellow-shades-400 hover:border-b hover:border-dotted"
              >
                <li className="px-4 text-sm my-2 font-medium">
                  Living Room Furniture
                </li>
              </Link>
              <Link
                to={`In#`}
                className="hover:text-fyellow-shades-400 hover:border-b hover:border-dotted"
              >
                <li className="px-4 text-sm my-2 font-medium">
                  Wardrobes and armoires
                </li>
              </Link>
              <Link
                to={`In#`}
                className="hover:text-fyellow-shades-400 hover:border-b hover:border-dotted"
              >
                <li className="px-4 text-sm my-2 font-medium">
                  Buffets and sideboards
                </li>
              </Link>
              <Link
                to={`In#`}
                className="hover:text-fyellow-shades-400 hover:border-b hover:border-dotted"
              >
                <li className="px-4 text-sm my-2 font-medium">
                  Outdoor sofas and sectionals
                </li>
              </Link>
              <Link
                to={`In#`}
                className="hover:text-fyellow-shades-400 hover:border-b hover:border-dotted"
              >
                <li className="px-4 text-sm my-2 font-medium">
                  Children's desks and chairs
                </li>
              </Link>
            </div>
          </ul>
        </li>
      );
  }
};

export default FilterListItem;

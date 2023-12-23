import { useLocation } from "react-router-dom";
import { DirectionType, LinkType } from "../../utils/types";
import FSVGs from "../SVGs/FSVGs";
import Navigation from "./Navigation";
import useDarkMode from "../../hooks/useDarkMode";

interface Props extends DirectionType {
  items: LinkType[];
}

const Navigations = ({ direction, items }: Props) => {
  const { pathname } = useLocation();
  const { isDarkMode } = useDarkMode();
  return (
    <nav>
      <ul
        className={`
            ${direction === "vertical" && "flex-col space-y-5"}
        `}
      >
        {items.map((item) => {
          // Dynamically computes the icon to be added to item
          const icon = (
            <FSVGs
              type={item.text.toLowerCase().replace(/\s/g, "")}
              color={`${
                pathname.includes(item.text.toLowerCase())
                  ? "white"
                  : `${isDarkMode ? "#d3d3d3" : "black"}`
              }`}
            />
          );
          // Add the computed icon to item
          item.icon = icon;
          // Return Nav with the computed icon
          return <Navigation key={item.text} item={item} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigations;

import { useState } from "react";
import Button from "../Button";
import Collapsible from "../Collapsibles/Collapsible";
import FilterListItem from "./FilterListItem";
import { useProductFilteringContext } from "../../contexts/product-filtering-context";
import useCategories from "../../hooks/category/useCategories";
import { CategoryType } from "../../services/category";
import { FetchResponseType } from "../../services/apiClient";
import { getMainCategory } from "../../utils/category";
import Spinner from "../Spinner";
import Center from "../Center";
import SubCategoryFilter from "./SubCategoryFilter";

const CategoryFilter = () => {
  // const [categories, _] = useState([
  //   {
  //     category: "Furniture",
  //     count: "| 168016",
  //     selected: true,
  //   },
  //   {
  //     category: "Garden Supplies",
  //     count: "| 12700",
  //     selected: false,
  //   },
  //   {
  //     category: "Home Accessories",
  //     count: "| 108071",
  //     selected: false,
  //   },
  //   {
  //     category: "Home Appliances",
  //     count: "| 48804",
  //     selected: false,
  //   },
  //   {
  //     category: "Furniture",
  //     count: "| 168016",
  //     selected: false,
  //   },
  //   {
  //     category: "Home Appliances",
  //     count: "| 48804",
  //     selected: false,
  //   },
  //   {
  //     category: "Furniture",
  //     count: "| 168016",
  //     selected: false,
  //   },
  //   {
  //     category: "Garden Supplies",
  //     count: "| 12700",
  //     selected: false,
  //   },
  //   {
  //     category: "Furniture",
  //     count: "| 168016",
  //     selected: false,
  //   },
  // ]);

  const [sliceLen, setSliceLen] = useState(4);
  const { data: categories, isLoading } = useCategories();

  let mainCat: CategoryType[] = [];

  if (categories) {
    mainCat = getMainCategory(categories as FetchResponseType<CategoryType>);
  }

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (categories)
    return (
      <div className="relative">
        <Collapsible headerName="Categories" noRightPadding>
          <h3 className="text-sm">
            {/* Home, Furniture & Appliances */}
            Filter by category
          </h3>
          <ul className="ml-4">
            {mainCat.slice(0, sliceLen).map(({ name, id }) => (
              <SubCategoryFilter text={name} mainCategoryId={id} />
            ))}
            {/* <Button
              onClick={() => {
                if (sliceLen === mainCat.length) {
                  setSliceLen(4);
                } else {
                  setSliceLen(mainCat.length);
                }
              }}
              styles="border-b-2 border-dotted border-fyellow text-fyellow text-sm"
            >
              {sliceLen === mainCat.length
                ? "Show less"
                : "Show all " + (mainCat.length - 4)}
            </Button> */}
          </ul>
        </Collapsible>
      </div>
    );
};

export default CategoryFilter;

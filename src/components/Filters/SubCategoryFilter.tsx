import { Link } from "react-router-dom";
import Heading from "../Heading";
import useSubCategories from "../../hooks/category/useSubCategories";
import { CategoryType } from "../../services/category";
import Spinner from "../Spinner";
import Button from "../Button";
import { useProductFilteringContext } from "../../contexts/product-filtering-context";

interface Props {
  text: string;
  selected?: boolean;
  count?: number;
  mainCategoryId: string;
}

const SubCategoryFilter = ({
  text,
  selected,
  count,
  mainCategoryId,
}: Props) => {
  const { data, isLoading } = useSubCategories(mainCategoryId);
  const { setCategoryId } = useProductFilteringContext();

  const subCategories = data as CategoryType[];

  console.log("SUBCATEGORIES", subCategories);

  if (isLoading)
    return (
      <li className="text-sm my-2 group/subcat">
        <Spinner />
      </li>
    );

  return (
    <li className="text-sm my-2 group/subcat">
      <Button
        onClick={() => setCategoryId(mainCategoryId)}
        styles="hover:text-fyellow-shades-400 hover:border-dotted"
      >
        <span className={`${selected && "font-semibold"}`}>{text}</span>
      </Button>
      <span className="text-fgrey"> {count} </span>

      {/* Sub Categories for main category sub category */}
      {subCategories && subCategories.length ? (
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
            {subCategories.map((subCat) => (
              <Button
                onClick={() => setCategoryId(subCat.id)}
                styles="hover:text-fyellow-shades-400 hover:border-b hover:border-dotted"
              >
                <li className="px-4 text-sm my-2 font-medium">{subCat.name}</li>
              </Button>
            ))}
          </div>
        </ul>
      ) : null}
    </li>
  );
};

export default SubCategoryFilter;

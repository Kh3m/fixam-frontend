import { Link } from "react-router-dom";
import Collapsible from "../Collapsibles/Collapsible";
import useSubCategories from "../../hooks/category/useSubCategories";
import { CategoryType } from "../../services/category";

interface Props {
  text: string;
  mainCategoryId: string;
}
const Category = ({ text, mainCategoryId }: Props) => {
  const { data } = useSubCategories(mainCategoryId);

  const subCategories = data as CategoryType[];

  console.log("SUBCATEGORIES", subCategories);

  if (!subCategories) return <ul>{/* <li>Nothing</li> */}</ul>;

  return (
    <li>
      <Collapsible headerName={text} to={{ path: `/${text}` }}>
        <ul className="pb-4">
          {subCategories.map((category) => (
            <li className=" text-gray-500 my-1">
              <Link to={`/${category.name}`} className="pl-8">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </Collapsible>
    </li>
  );
};

export default Category;

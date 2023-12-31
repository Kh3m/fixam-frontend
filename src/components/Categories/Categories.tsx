import { FetchResponseType } from "../../services/apiClient";
import { CategoryType } from "../../services/category";
import { getMainCategory } from "../../utils/category";
import Category from "./Category";

interface Props {
  categories: FetchResponseType<CategoryType> | CategoryType[];
}

const Categories = ({ categories }: Props) => {
  let mainCat: CategoryType[] = [];

  if (categories) {
    mainCat = getMainCategory(categories as FetchResponseType<CategoryType>);
  }

  if (categories && mainCat.length)
    return (
      <ul className="dark:bg-slate-800 bg-white px-6 py-10 rounded-b-2xl w-full fshadow">
        {mainCat.map((cat) => (
          <Category text={cat.name} key={cat.id} />
        ))}
      </ul>
    );

  return (
    <ul className="dark:bg-slate-800 bg-white px-6 py-10 rounded-b-2xl w-full fshadow"></ul>
  );
};

export default Categories;

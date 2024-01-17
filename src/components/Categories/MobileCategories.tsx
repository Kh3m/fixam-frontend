import { FetchResponseType } from "../../services/apiClient";
import { CategoryType } from "../../services/category";
import MobileCategory from "./MobileCategory";

interface Props {
  categories: FetchResponseType<CategoryType> | CategoryType[];
  mainCat: CategoryType[];
}

const MobileCategories = ({ categories, mainCat }: Props) => {
  // let mainCat: CategoryType[] = [];

  // if (categories) {
  //   mainCat = getMainCategory(categories as FetchResponseType<CategoryType>);
  // }

  if (categories && mainCat.length)
    return (
      <ul className="ml-6 my-6">
        {mainCat.map((cat) => (
          <MobileCategory
            text={cat.name}
            key={cat.id}
            mainCategoryId={cat.id}
          />
        ))}
      </ul>
    );

  return <ul className="ml-6 my-6"></ul>;
};

export default MobileCategories;

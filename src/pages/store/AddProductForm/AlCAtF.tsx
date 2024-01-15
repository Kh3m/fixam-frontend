import { useFormContext } from "react-hook-form";
import SelectOption from "../../../components/Option/SelectOption";
import Space from "../../../components/Space";
import FormFieldCard from "./FormFieldCard";
import { Fragment, useState } from "react";
import apiClient, { FetchResponseType } from "../../../services/apiClient";
import { ActionMeta, MultiValue, SingleValue } from "react-select";
import useCategories from "../../../hooks/category/useCategories";
import { OptionType } from "../../../utils/types";
import { productBaseURL } from "../../../services/baseURLs";

type CategoryType = {
  id: string;
  subcategories: string[];
  name: string;
  description: string;
  parent: string | null;
};

// type CategoryResponseType = {
//   results: CategoryType[];
// };

interface Props {
  defaultCategory?: OptionType;
}

const CategoryFields = ({ defaultCategory }: Props) => {
  const { control, setValue } = useFormContext();
  let selectedCat = "";

  const [subCatElements, setSubCatElements] = useState<JSX.Element[]>([]);
  const { data: categories } = useCategories();

  const [isLoadingSubCategories, setIsLoadingSubCategories] = useState(false);

  if (defaultCategory?.value) {
    setValue("category", defaultCategory.value);
  }

  const handleCatSelect = async (
    selected: SingleValue<OptionType> | MultiValue<OptionType>,
    _: ActionMeta<OptionType>,
    whichCat: string
  ) => {
    const categoryId = (selected as OptionType).value;
    setValue("category", categoryId);
    setIsLoadingSubCategories(true);

    try {
      // TODO: Fix using useSubCategories
      const subCategoriesResponse = await apiClient.get<CategoryType[]>(
        `${productBaseURL}/products/categories/${categoryId}/subcategories/`
      );

      const subCategories = subCategoriesResponse.data;

      if (subCategories.length > 0) {
        setSubCatElements([]);
        selectedCat = (selected as OptionType).label;

        const newSubCatElement = generateSubCategoryElement(subCategories);

        setSubCatElements((prevSubCatElements) => [
          ...prevSubCatElements,
          newSubCatElement,
        ]);
      } else {
        // Clear the subCatElement if the main-category is selected and it has no subcat
        if (whichCat === "main-category") setSubCatElements([]);
      }
    } catch (error) {
      // Handle error fetching subcategories
      console.error("Error fetching subcategories:", error);
    } finally {
      setIsLoadingSubCategories(false);
    }
  };

  const generateSubCategoryElement = (subCategories: CategoryType[]) => {
    return (
      <Fragment key={Date.now()}>
        <Space spacing="my-4" />
        {isLoadingSubCategories && (
          <p className="text-fyellow text-lg">Loading...</p>
        )}

        <SelectOption
          name="category"
          control={control}
          options={subCategories.map((cat) => ({
            label: cat.name,
            value: cat.id,
          }))}
          placeholder={`--Select a Sub Category for ${selectedCat}--`}
          noOptionsMessage="No category found"
          onChange={(
            newValue: SingleValue<OptionType> | MultiValue<OptionType>,
            _
          ) => {
            handleCatSelect(newValue, _, "sub-category");
          }}
        />
      </Fragment>
    );
  };

  let mainCat: OptionType[] = [];

  if (categories) {
    mainCat = (categories as FetchResponseType<CategoryType>).results
      .filter((cat) => cat.parent === null)
      .map((fCat) => ({ label: fCat.name, value: fCat.id }));
  }

  if (categories && mainCat.length) {
    return (
      <FormFieldCard title="Select Category">
        <SelectOption
          name={`category`}
          defaultValue={defaultCategory}
          control={control}
          options={mainCat}
          placeholder={`--Select a Category--`}
          noOptionsMessage="No category found"
          onChange={(
            newValue: SingleValue<OptionType> | MultiValue<OptionType>,
            _
          ) => {
            handleCatSelect(newValue, _, "main-category");
          }}
        />
        {subCatElements}
      </FormFieldCard>
    );
  }

  return <p>Loading...</p>;
};

export default CategoryFields;

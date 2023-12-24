import { useFormContext } from "react-hook-form";
import SelectOption from "../../../components/Option/SelectOption";
import Space from "../../../components/Space";
import FormFieldCard from "./FormFieldCard";
import { useEffect, useState } from "react";
import apiClient, { FetchResponseType } from "../../../services/apiClient";
import { ActionMeta, MultiValue, SingleValue } from "react-select";
import useCategories from "../../../hooks/category/useCategories";
import useSubCategories from "../../../hooks/category/useSubCategories";

type CategoryType = {
  id: string;
  subcategories: string[];
  name: string;
  description: string;
  parent: string | null;
};

type CategoryResponseType = {
  results: CategoryType[];
};

export type OptionType = {
  label: string;
  value: string;
};

const CategoryFields = () => {
  const [categoryId, setcategoryId] = useState<string | undefined>();
  const { data: categories, error, isLoading } = useCategories();
  const { data: subCategories, isLoading: isLoadingSubCategories } =
    useSubCategories(categoryId);

  const { control } = useFormContext();
  const [hasSubCategories, setHasSubCategories] = useState(false);

  // useEffect(() => {
  //   // console.log("categoryService", categoryService.getAll());

  //   apiClient
  //     .get<CategoryResponseType>("/products/categories/")
  //     .then((res) => {
  //       console.log("Categories", res.data);
  //       // Filter categories with null parent
  //       const parentCats = res.data.results.filter(
  //         (cat) => cat.parent === null
  //       );
  //       setCategories(parentCats);
  //     })
  //     .then((err) => {
  //       console.log("COULDN'T FETCH CATEGORIES", err);
  //     });
  // }, []);

  const handleCatSelect = async (
    selected: SingleValue<OptionType> | MultiValue<OptionType>,
    _: ActionMeta<OptionType>
  ) => {
    setcategoryId((selected as OptionType).value);
    const foundCategory = (
      categories as FetchResponseType<CategoryType>
    )?.results.find((cat) => cat.name === (selected as OptionType).label);
    foundCategory?.subcategories.length
      ? setHasSubCategories(true)
      : setHasSubCategories(false);
    console.log("SELECTED", selected, subCategories);
    // console.log("SELECTED", selected, hasSubCat);
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
          name="category"
          control={control}
          options={mainCat}
          placeholder="--Select a Category--"
          noOptionsMessage="No category found"
          onChange={handleCatSelect}
        />
        <Space spacing="my-4" />
        {hasSubCategories && isLoadingSubCategories && (
          <p className="text-fyellow text-lg">Loadind...</p>
        )}
        {hasSubCategories && subCategories && (
          <SelectOption
            name="sub-category"
            control={control}
            options={(subCategories as CategoryType[]).map((cat) => ({
              label: cat.name,
              value: cat.id,
            }))}
            placeholder="--Select a Sub Category--"
            noOptionsMessage="No category found"
            onChange={handleCatSelect}
          />
        )}
      </FormFieldCard>
    );
  }
  return <p>Loading...</p>;
};

export default CategoryFields;

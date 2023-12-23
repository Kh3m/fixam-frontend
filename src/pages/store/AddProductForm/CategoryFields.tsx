import { useFormContext } from "react-hook-form";
import SelectOption from "../../../components/Option/SelectOption";
import Space from "../../../components/Space";
import FormFieldCard from "./FormFieldCard";
import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";

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
  const { control } = useFormContext();
  const [categories, setCategories] = useState<CategoryType[]>([]);
  // const [subCategories, setSubCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<CategoryType[]>([]);
  const [hasSubCategories, setHasSubCategories] = useState(false);
  const [isLoadingSubCategories, setIsLoadingSubCategories] = useState(false);

  useEffect(() => {
    apiClient
      .get<CategoryResponseType>("/products/categories/")
      .then((res) => {
        console.log("Categories", res.data);
        // Filter categories with null parent
        const parentCats = res.data.results.filter(
          (cat) => cat.parent === null
        );
        setCategories(parentCats);
      })
      .then((err) => {
        console.log("COULDN'T FETCH CATEGORIES", err);
      });
  }, []);

  const handleCatSelect = async (selected: OptionType) => {
    const hasSubCat = categories.find((cat) => cat.name === selected.label);
    if (hasSubCat?.subcategories.length) {
      setHasSubCategories(true);
      setIsLoadingSubCategories(true);
      const subCatsResponse = await apiClient.get<CategoryResponseType>(
        "/products/categories/" + selected.value + "/subcategories/"
      );
      console.log("\n\n\n subCatsResponse", subCatsResponse.data.results);
      setSubCategories(subCatsResponse.data.results);
      setIsLoadingSubCategories(false);
    } else {
      setHasSubCategories(false);
      setIsLoadingSubCategories(false);
    }

    console.log("SELECTED", selected, hasSubCat);
  };

  return (
    <FormFieldCard title="Select Category">
      <SelectOption
        name="category"
        control={control}
        options={categories.map((cat) => ({ label: cat.name, value: cat.id }))}
        placeholder="--Select a Category--"
        noOptionsMessage="No category found"
        onChange={handleCatSelect}
      />
      <Space spacing="my-4" />
      {hasSubCategories && isLoadingSubCategories && (
        <p className="text-fyellow text-lg">Loadind...</p>
      )}
      {/* {hasSubCategories && (
        <SelectOption
          name="sub-category"
          control={control}
          options={subCategories.map((cat) => ({
            label: cat.name,
            value: cat.id,
          }))}
          placeholder="--Select a Sub Category--"
          noOptionsMessage="No category found"
        />
      )} */}
    </FormFieldCard>
  );
};

export default CategoryFields;

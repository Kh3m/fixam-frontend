// import { useFormContext } from "react-hook-form";
// import SelectOption from "../../../components/Option/SelectOption";
// import Space from "../../../components/Space";
// import FormFieldCard from "./FormFieldCard";
// import { useState } from "react";
// import apiClient, { FetchResponseType } from "../../../services/apiClient";
// import { ActionMeta, MultiValue, SingleValue } from "react-select";
// import useCategories from "../../../hooks/category/useCategories";
// import useSubCategories from "../../../hooks/category/useSubCategories";

// type CategoryType = {
//   id: string;
//   subcategories: string[];
//   name: string;
//   description: string;
//   parent: string | null;
// };

// type CategoryResponseType = {
//   results: CategoryType[];
// };

// export type OptionType = {
//   label: string;
//   value: string;
// };

// const CategoryFields = () => {
//   const [categoryId, setCategoryId] = useState<string | undefined>();
//   const { data: categories, error, isLoading } = useCategories();
//   const { data: subCategories, isLoading: isLoadingSubCategories } =
//     useSubCategories(categoryId);

//   const [subCatElements, setSubCatElements] = useState<JSX.Element[] | null>(
//     []
//   );
//   const { control } = useFormContext();
//   const [hasSubCategories, setHasSubCategories] = useState(false);

//   const handleCatSelect = async (
//     selected: SingleValue<OptionType> | MultiValue<OptionType>,
//     _: ActionMeta<OptionType>
//   ) => {
//     setCategoryId((selected as OptionType).value);
//     const foundCategory = (
//       categories as FetchResponseType<CategoryType>
//     )?.results.find((cat) => cat.name === (selected as OptionType).label);

//     if (foundCategory?.subcategories.length) {
//       setHasSubCategories(true);
//       // Clear existing subcategories
//       setSubCatElements([]);

//       if (subCategories) {
//         // Generate new subcategory element
//         const newSubCatElement = generateSubCategoryElement(
//           subCategories as CategoryType[]
//         );
//         setSubCatElements([newSubCatElement as JSX.Element]);
//       }
//     } else {
//       setHasSubCategories(false);
//     }
//     console.log("SELECTED", selected, subCategories);
//   };

//   const generateSubCategoryElement = (subCategories: CategoryType[]) => {
//     if (subCategories.map)
//       return (
//         <SelectOption
//           key={categoryId} // Use a unique identifier as the key
//           name="sub-category"
//           control={control}
//           options={subCategories.map((cat) => ({
//             label: cat.name,
//             value: cat.id,
//           }))}
//           placeholder="--Select a Sub Category--"
//           noOptionsMessage="No category found"
//           onChange={handleSubCatSelect}
//         />
//       );
//     return null;
//   };

//   const handleSubCatSelect = (
//     selected: SingleValue<OptionType> | MultiValue<OptionType>,
//     _: ActionMeta<OptionType>
//   ) => {
//     // Handle subcategory selection logic here
//     console.log("SUBCATEGORY SELECTED", selected);
//   };

//   let mainCat: OptionType[] = [];

//   if (categories) {
//     mainCat = (categories as FetchResponseType<CategoryType>).results
//       .filter((cat) => cat.parent === null)
//       .map((fCat) => ({ label: fCat.name, value: fCat.id }));
//   }

//   if (categories && mainCat.length) {
//     return (
//       <FormFieldCard title="Select Category">
//         <SelectOption
//           name="category"
//           control={control}
//           options={mainCat}
//           placeholder="--Select a Category--"
//           noOptionsMessage="No category found"
//           onChange={handleCatSelect}
//         />
//         <Space spacing="my-4" />
//         {hasSubCategories && isLoadingSubCategories && (
//           <p className="text-fyellow text-lg">Loading...</p>
//         )}
//         {hasSubCategories && subCategories && subCatElements}
//       </FormFieldCard>
//     );
//   }

//   return <p>Loading...</p>;
// };

// export default CategoryFields;

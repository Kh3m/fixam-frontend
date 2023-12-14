import Category from "./Category";

const categories: string[] = [
  "Home Depot",
  "Building Material",
  "Smart Homes",
  "Find Property",
  "Repairs/Services",
  "Hire Equipments",
  "General Appliance",
  "Furnishing & Fixtures",
  "Find Professionals",
];

const Categories = () => {
  return (
    <ul className="dark:bg-fdark-700 bg-white px-6 py-10 rounded-b-2xl w-full fshadow">
      {categories.map((cat, i) => (
        <Category text={cat} key={i} />
      ))}
    </ul>
  );
};

export default Categories;

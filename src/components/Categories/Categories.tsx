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
    <ul className="bg-white px-6 py-10 rounded-b-2xl w-full fshadow">
      {categories.map((cat) => (
        <Category text={cat} />
      ))}
    </ul>
  );
};

export default Categories;

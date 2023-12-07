import IconPlus from "../IconPlus";

const Category = ({ text }: { text: string }) => {
  return (
    <li className="flex justify-between mb-10 text-sm cursor-pointer items-center">
      <span className=" text-fblack ">{text}</span> <IconPlus name="cat" />
    </li>
  );
};

export default Category;

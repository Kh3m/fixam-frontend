import Heading from "../Heading";

interface Props {
  features: string[];
}

const ProductFeatures = ({ features }: Props) => {
  return (
    <section className="font-semibold text-xs">
      <Heading variant="h4" styles="text-fgrey  mt-2 uppercase">
        Features
      </Heading>
      <ul className=" h-44 overflow-auto no-scrollbar mt-2">
        {features.map((feature) => (
          <li
            className="dark:text-white my-1 before:content-[''] flex items-center
            before:inline-block before:h-1 before:w-1 before:rounded-full 
            before:bg-black before:mr-2"
          >
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeatures;

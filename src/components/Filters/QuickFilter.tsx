import chairs from "../../assets/cats/chairs.png.png";
import beds from "../../assets/cats/beds.png.png";
import mattresses from "../../assets/cats/mattresses.png.png";
import sofas from "../../assets/cats/sofas.png.png";
import tables from "../../assets/cats/tables.png.png";
import tvStands from "../../assets/cats/tv-stands.png.png";
import wardrobes from "../../assets/cats/wardrobes.png.png";

const iamgeLabels = [
  { image: chairs, label: "Chairs" },
  { image: tables, label: "Tables" },
  { image: sofas, label: "Sofas" },
  { image: beds, label: "Beds & Bed Frames" },
  { image: tvStands, label: "TV Stands & Mounts" },
  { image: mattresses, label: "Mattresses" },
  { image: wardrobes, label: "Wardrobes" },
];

const ImageWithLabel = ({ image, label }: { image: string; label: string }) => {
  return (
    <div
      className=" w-16 h-16 cursor-pointer 
    hover:border-b-2 border-fgrey 
    transition-color duration-200"
    >
      <img src={image} alt={label} className=" text-center m-auto w-8" />
      <h6 className="text-[10px] text-center leading-3">{label}</h6>
    </div>
  );
};
const QuickFilter = () => (
  <div className="flex justify-between">
    {iamgeLabels.map(({ image, label }) => (
      <ImageWithLabel key={label} image={image} label={label} />
    ))}
  </div>
);

export default QuickFilter;

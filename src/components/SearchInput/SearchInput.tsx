import { useRef, type FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useProductFilteringContext } from "../../contexts/product-filtering-context";
import InputIcon from "./InputIcon";
// import useMicrophone from "./useMicrophone";

const SearchInput = () => {
  const navigate = useNavigate();

  // const micRef = useRef<HTMLSpanElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  // const { searchText, setSearchText } = useMicrophone(micRef, searchRef);

  const {
    setSearchTerm,
    filteringState: { searchTerm },
  } = useProductFilteringContext();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(searchTerm);
    navigate(`/products/?search=${searchTerm?.toLowerCase()}`);
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-3 ">
      <div
        className="relative w-full 
      md:w-[500px]"
      >
        {/* <InputIcon image={searchSvg} side="left" /> */}
        <input
          // value={searchText}
          value={searchTerm ? searchTerm : ""}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            // setSearchText(event.target.value);
          }}
          ref={searchRef}
          placeholder="Search products, materials, and professionals"
          className="h-[46px] pl-5 pr-16 rounded-md w-full outline-none 
          placeholder:dark:text-fgrey text-fgrey"
        />
        <span className="dark:bg-fdark-100 dark:text-slate-500 text-fyellow bg-white">
          <InputIcon side="right" image={<FaSearch />} />
        </span>
      </div>
      <div className="dark:bg-fdark-100 dark:text-slate-500 text-fyellow bg-white h-[46px] w-[44px] rounded-md flex justify-center items-center cursor-pointer">
        <FaMicrophone size={18} />
        {/* <FaMicrophoneSlash size={18} /> */}
      </div>
    </form>
  );
};

export default SearchInput;

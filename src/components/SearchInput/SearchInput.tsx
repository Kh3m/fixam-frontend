import InputIcon from "./InputIcon";
import useMicrophone from "./useMicrophone";
import { type FormEvent, useRef } from "react";
import SearchIconSvg from "./SearchIconSvg";
import Mic from "./Mic";

const SearchInput = () => {
  const micRef = useRef<HTMLSpanElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const { searchText, setSearchText } = useMicrophone(micRef, searchRef);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(searchText);
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-3 ">
      <div className="relative w-[500px]">
        {/* <InputIcon image={searchSvg} side="left" /> */}
        <input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          ref={searchRef}
          placeholder="Search products, materials, and professionals"
          className="h-[46px] pl-5 pr-16 rounded-md w-full outline-none placeholder:dark:text-fgrey text-fgrey"
        />
        <InputIcon side="right" image={<SearchIconSvg />} />
      </div>
      <div className="bg-white h-[46px] w-[44px] rounded-md flex justify-center items-center cursor-pointer">
        <Mic />
      </div>
    </form>
  );
};

export default SearchInput;

import Button from "./Button";
import Logo from "./Logo";
import SearchInput from "./SearchInput/SearchInput";

const Header = () => {
  return (
    <div className=" h-24 bg-fyellow flex items-center justify-between">
      <div className="flex items-center ml-[80px]">
        <div className="w-[95px] h-[78px]">
          <Logo color="white" />
        </div>
        <SearchInput />
      </div>
      <div className="flex items-center space-x-5 mr-[100px]">
        <Button variant="text">Login</Button>
        <Button variant="outlined">Register</Button>
        <Button
          variant="elevated"
          styles="bg-white text-fyellow border-2 border-white"
        >
          Be a vendor
        </Button>
      </div>
    </div>
  );
};

export default Header;

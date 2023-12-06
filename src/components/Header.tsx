import Button from "./Button";
import Logo from "./Logo";
import SearchInput from "./SearchInput/SearchInput";

const Header = () => {
  return (
    <div className="h-[130px] bg-fyellow flex items-center justify-between">
      <div className="flex items-center ml-[120px]">
        <div className="w-[105px] h-[88px]">
          <Logo color="white" />
        </div>
        <SearchInput />
      </div>
      <div className="flex items-center space-x-5 mr-[140px]">
        <Button variant="text">Login</Button>
        <Button variant="outlined">Register</Button>
        <Button variant="elevated">Be a vendor</Button>
      </div>
    </div>
  );
};

export default Header;

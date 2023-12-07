import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput/SearchInput";

const Header = () => {
  return (
    <header className="bg-fyellow">
      <Container>
        <div className=" h-24  flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[95px] h-[78px]">
              <Logo color="white" />
            </div>
            <SearchInput />
          </div>
          <div className="flex items-center space-x-5">
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
      </Container>
    </header>
  );
};

export default Header;

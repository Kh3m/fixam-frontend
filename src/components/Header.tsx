import { Link } from "react-router-dom";
import apiClient from "../services/apiClient";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput/SearchInput";

const Header = () => {
  const store = {
    owner: "developer",
    name: "Khem Store",
    email: "khem6333@gmail.com",
    phone: "+234 813 191 5694",
    slug: "khem-url",
    logo_img_url:
      "https://fixam-media.s3.eu-north-1.amazonaws.com/stores/3fa85f64-5717-4562-b3fc-2c963f66afa6/2023-12-12/my-cat.jpg",
    banner_img_url:
      "https://fixam-media.s3.eu-north-1.amazonaws.com/stores/3fa85f64-5717-4562-b3fc-2c963f66afa6/2023-12-12/my-cat.jpg",
    website: "https://www.khemshield.com",
    address: "Katampe, Phase 1 Plaza",
    description:
      "This store is a developer store to test the development flow.",
    business_license_number: "khem-license",
  };

  const handleCreateStore = async () => {
    const createdStore = apiClient.post("/api/v1/stores", store);
    console.log(createdStore);
  };
  return (
    <header className="bg-fyellow">
      <Container>
        <div className=" h-24  flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[95px] h-[78px] cursor-pointer">
              <Link to={"/"}>
                <Logo color="white" />
              </Link>
            </div>
            <SearchInput />
          </div>
          <div className="flex items-center space-x-5">
            <Button variant="text" styles="text-white text-base ">
              Login
            </Button>
            <Button variant="outlined">Register</Button>
            <Link to="/stores/storeId">
              <Button
                variant="elevated"
                styles="bg-white text-fyellow border-2 border-white"
              >
                Be a vendor
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

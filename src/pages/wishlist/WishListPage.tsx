import Card from "../../components/Card";
import Container from "../../components/Container";
import HR from "../../components/HR";
import Heading from "../../components/Heading";
import Main from "../../components/Main";
import SimilarAds from "../../components/Products/SimilarAds";
import Space from "../../components/Space";
import SideBar from "../store/SideBar";
import WishListItems from "./WishListItems";

const WishListPage = () => {
  const newItems = [
    { text: "Account", to: `/acount` },
    { text: "Orders", to: `/orders` },
    { text: "Wishlist", to: `/wishlist` },
    { text: "Messages", to: `/messages` },
    { text: "Settings", to: `/settings` },
    { text: "Log out", to: "/logout" },
  ];

  return (
    <Main>
      <Space spacing="my-14" />
      <Container
        twoColLayout
        Aside={
          <Card>
            <SideBar newItems={newItems} />
          </Card>
        }
      >
        <div className="pl-12">
          <Card styles="px-12">
            <div className="flex justify-between font-semibold text-2xl">
              <Heading variant="h2" styles="text-2xl">
                Wishlist
              </Heading>
              <span className="text-lg">2 Items</span>
            </div>
            <HR styles="mt-4 mb-8" />
            <WishListItems />
            <Space spacing="my-14" />
          </Card>
        </div>
      </Container>
      <Space spacing="my-24" />
      <Container>
        <SimilarAds heading="Recommended" />
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default WishListPage;

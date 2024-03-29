import { Outlet } from "react-router-dom";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Main from "../../components/Main";
import SimilarAds from "../../components/Products/SimilarAds";
import Space from "../../components/Space";
import SideBar from "../store/SideBar";
import { Fragment } from "react";
import useResponsive from "../../hooks/useResponsive";

const UserPage = () => {
  const newItems = [
    { text: "Account", to: `/users/account/addresses` },
    { text: "Orders", to: `/users/orders` },
    { text: "Wishlist", to: `/users/wishlist` },
    // { text: "Notification", to: `/users/notification` },
    { text: "Log out", to: "/logout" },
  ];

  const isMd = useResponsive("md");

  return (
    <Main>
      <Space spacing="my-14" />
      <Container
        twoColLayout
        Aside={
          isMd ? (
            <Card>
              <SideBar newItems={newItems} />
            </Card>
          ) : null
        }
      >
        <div className="md:pl-12">
          <Outlet />
        </div>
      </Container>
      {/* Fix */}
      <Fragment>
        <Space spacing="my-24" />
        <Container>
          <SimilarAds heading="Recommended" />
        </Container>
      </Fragment>
      <Space spacing="my-14" />
    </Main>
  );
};

export default UserPage;

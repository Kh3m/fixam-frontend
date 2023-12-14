import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Main from "../../components/Main";
import Space from "../../components/Space";
import SideBar from "./SideBar";
import UserAccountCard from "./UserAccountCard";

const StorePage = () => {
  return (
    <Main>
      <Space spacing="my-14" />
      <Container Aside={<SideBar />} twoColLayout>
        <UserAccountCard />
        <Outlet />
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default StorePage;

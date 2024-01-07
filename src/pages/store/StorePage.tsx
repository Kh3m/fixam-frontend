import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Main from "../../components/Main";
import AccessibleMenu from "../../components/Menu/AccessibleMenu";
import Space from "../../components/Space";
import { StoreResponseType } from "../../entities/store";
import useAuth from "../../hooks/useAuth";
import { getCookie } from "../../utils/cookies";
import SideBar from "./SideBar";
import UserAccountCard from "./UserAccountCard";
import LoadingFixam from "./skeletons/LoadingFixam";
import SideBarSkeleton from "./skeletons/SideBarSkeleton";
import UserAccountCardSkeleton from "./skeletons/UserAccountCardSkeleton";
import { storeBaseURL } from "../../services/baseURLs";
import { dummyApiClient } from "../../services/apiClient";

const menuItems = ["Switch account", "Change profile picture", "Log out"];

const StorePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeData, setStoreData] = useState<StoreResponseType[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setIsLoading(true);

    const user = { id: getCookie("userId") };

    console.log("isAuthenticated", isAuthenticated(), "user", user);

    if (isAuthenticated() && user) {
      dummyApiClient
        .get<StoreResponseType[]>(`${storeBaseURL}/stores/owner/${user?.id}/`)
        .then((res) => {
          // TODO: User's store slug to load user
          const foundUserStores = res.data;
          // console.log("foundUserStore", foundUserStores);
          if (foundUserStores.length) {
            setStoreData(foundUserStores);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("Something went wrong", err);
        });
      // navigate(`/stores/${"userId"}/dashboard`);
    } else {
      // User is not authenticated
      console.log("USER is not auth");
      setStoreData([]);
      setIsLoading(false);
    }

    setIsLoading(false);
  }, []);

  return (
    <Main>
      <Space spacing="my-14" />
      <Container
        Aside={
          isLoading ? (
            <SideBarSkeleton />
          ) : (
            <SideBar
              logo={
                storeData.length
                  ? storeData[storeData.length - 1].logo_img_url
                  : ""
              }
              storeName={
                storeData.length ? storeData[storeData.length - 1].name : ""
              }
              slug={
                storeData.length ? storeData[storeData.length - 1].slug : ""
              }
              withLogo
            />
          )
        }
        twoColLayout
      >
        <div className="flex justify-end">
          {isLoading && <UserAccountCardSkeleton />}
          {!isLoading && (
            <AccessibleMenu
              stylesForDropdown="top-[94px]"
              menuItems={menuItems}
            >
              <UserAccountCard />
            </AccessibleMenu>
          )}
        </div>
        <Space spacing="my-2" />
        {isLoading && <LoadingFixam />}
        {!isLoading && <Outlet />}
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default StorePage;

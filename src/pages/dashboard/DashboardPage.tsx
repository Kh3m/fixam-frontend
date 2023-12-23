import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { getCookie } from "../../utils/cookies";
import { StoreResponseType } from "../../entities/store";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeData, setStoreData] = useState<StoreResponseType[]>([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Get user's store by id
  const userId = getCookie("userId");
  useEffect(() => {
    setIsLoading(true);

    const user = { id: getCookie("userId") };

    console.log("isAuthenticated", isAuthenticated(), "user", user);

    if (isAuthenticated() && user) {
      apiClient
        .get<StoreResponseType[]>("/stores/owner/" + user?.id + "/")
        .then((res) => {
          // TODO: User's store slug to load user
          const foundUserStores = res.data;
          console.log("foundUserStore", foundUserStores);
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
    <section>
      <Banner
        styles="h-[200px] rounded-lg"
        bannerURL={
          storeData.length ? storeData[storeData.length - 1].banner_img_url : ""
        }
        heading="Elevate Your Code"
        description="Welcome to our developer shop, where creativity meets functionality. 
        Explore a curated collections of tools, frameworks, and accessories tailored for developers"
        isStoreBanner
      />
    </section>
  );
};

export default DashboardPage;

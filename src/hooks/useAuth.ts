import { useEffect, useState } from "react";
import { getCookie, removeCookie, setCookie } from "../utils/cookies";
import { StoreType } from "../entities/store";
import apiClient from "../services/apiClient";
import { FieldValues } from "react-hook-form";
import { isAxiosError } from "axios";

// interface UserData {
//   id: string;
// }

interface UserData {
  access?: string;
  refresh?: string;
  user: { id: string };
  access_expiration?: string;
  refresh_expiration?: string;
}

// type UserCredentialType = {
//   email: string;
//   username?: string;
//   password: string;
// };

// type UserCredentialRegType = {
//   email: string;
//   password1: string;
//   password2: string;
//   first_name: string;
//   last_name: string;
//   phone: string;
// };

const useAuth = () => {
  const [isLoadingUserStore, setIsLoadingUserStore] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [userStores, setUserStores] = useState<StoreType[] | null>(null);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState("");

  useEffect(() => {
    setIsLoadingUserStore(true);
    // Check for an existing user cookie when the component mount
    const userIdFromCookie = getCookie("userId");
    const accessFromCookie = getCookie("access");
    const refreshFromCookie = getCookie("refresh");
    if (userIdFromCookie && accessFromCookie && refreshFromCookie) {
      // If a user cookie exists, set the user's state
      setUserInfo({
        user: { id: userIdFromCookie },
        access: accessFromCookie,
        refresh: refreshFromCookie,
      });
    }

    // Set store slug
    if (isAuthenticated()) {
      const userId = getCookie("userId");

      apiClient.get<StoreType[]>(`/stores/owner/${userId}/`).then((res) => {
        setUserStores(res.data);
        setIsLoadingUserStore(false);
      });
    }
  }, []);

  const login = async (credentials: FieldValues) => {
    setIsAuthenticating(true);
    try {
      // Make API call to backend auth endpoint using axios
      const res = await apiClient.post<UserData>(`/users/auth/login/`, {
        email: credentials.email,
        password: credentials.password,
      });

      if (res.status === 200) {
        const userData = res.data;
        // TODO: Check for side effect
        setCookie("userId", userData.user.id || "", 7); // Expires in 7 days
        setCookie("accessToken", userData.access || "", 7); // Expires in 7 days
        setCookie("refreshToken", userData?.refresh || "", 7); // Expires in 7 days

        if (!!getCookie("cartId")) {
          try {
            // Try to merge cart items
            const mergeRes = await apiClient.post(
              `/carts/${getCookie("cartId")}/merge/${userData.user.id}/`
            );

            // If successfully merged, remove cartId from cookie
            console.log("MergeRes", mergeRes);
            removeCookie("cartId");
            setIsAuthenticating(false);
          } catch (error) {
            console.log("MERGING ERROR", error);
            setIsAuthenticating(false);
            if (isAxiosError(error))
              setAuthErrorMessage(error.response?.data[0]);
          }
        }
        setUserInfo({
          user: { id: userData.user.id },
          access: userData.access,
          refresh: userData.refresh,
          access_expiration: userData.access_expiration,
          refresh_expiration: userData.refresh_expiration,
        });
        setIsAuthenticating(false);
        setIsLoginSuccessful(true);
      } else {
        // TODO: Handle authentication error
        console.error("Authentication failed");
        setIsAuthenticating(false);
      }
    } catch (error) {
      console.error("Something went wrong while authenticating user", error);
      setIsAuthenticating(false);
      if (isAxiosError(error)) setAuthErrorMessage(error.response?.data[0]);
    }
  };

  const register = async (credentials: FieldValues) => {
    setIsAuthenticating(true);
    try {
      const response = await apiClient.post(`/users/auth/registration/`, {
        email: credentials.email,
        password1: credentials.password,
        password2: credentials.confirm_password,
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        phone: credentials.phone,
      });

      if (response.status === 201) {
        // Registration successfull, login automatically
        console.log("Registration Successfull", response.status, response.data);
        setIsRegistrationSuccessful(true);
        setIsAuthenticating(false);
        // login(credentials);
      }
    } catch (error) {
      console.log("Registration failed", error);
      setIsAuthenticating(false);
      if (isAxiosError(error)) setAuthErrorMessage(error.response?.data[0]);
    }

    setIsAuthenticating(false);
  };

  const logout = () => {
    removeCookie("userId");
    removeCookie("refresh");
    removeCookie("access");
    setUserInfo(null);
  };

  const isAuthenticated = () => {
    return !!getCookie("userId"); // !!"user" convert to it's boolean equivalent -> true
  };

  // const authUserDummy = async (userId: string) => {
  //   try {
  //     // Make API call to backend auth endpoint using axios
  //     const res = await apiClient.get<UserData>(`/users/` + userId + "/");

  //     console.log("FoundUser Response", res);

  //     if (res.status === 200) {
  //       const foundUserData = res.data;
  //       setCookie("userId", foundUserData.user.id, 8);
  //       setCookie("userId", foundUserData.user.id, 8);
  //       setCookie("userId", foundUserData.user.id, 8); // Expires in 8 days
  //       if (!!getCookie("cartId")) {
  //         // Try to merge cart items
  //         const mergeRes = await apiClient.post(
  //           `/carts/${getCookie("cartId")}/merge/${foundUserData.id}/`
  //         );

  //         // If successfully merged, remove cartId from cookie
  //         console.log("MergeRes", mergeRes);
  //         removeCookie("cartId");
  //       }
  //       setUser({ id: foundUserData.id });
  //     } else {
  //       // TODO: Handle authentication error
  //       console.error("FETCH USER failed");
  //     }
  //   } catch (err) {
  //     console.error(
  //       "Something went wrong while FETCHING user or merging cart",
  //       err
  //     );
  //   }
  // };

  return {
    userInfo,
    login,
    logout,
    register,
    userStores,
    // authUserDummy,
    isAuthenticated,
    authErrorMessage,
    isAuthenticating,
    isLoginSuccessful,
    isLoadingUserStore,
    isRegistrationSuccessful,
  };
};

export default useAuth;

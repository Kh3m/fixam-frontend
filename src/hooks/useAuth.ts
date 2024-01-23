import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { StoreType } from "../entities/store";
import apiClient from "../services/apiClient";
import {
  getTokenExpirationTime,
  isAccessTokenValid,
  setTokens,
} from "../services/tokenManagement";
import { getCookie, removeCookie, setCookie } from "../utils/cookies";

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

export type UserCredentialLoginType = {
  email: string;
  username?: string;
  password: string;
};

export type UserCredentialRegType = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
  phone: string;
};

const useAuth = () => {
  const [isLoadingUserStore, setIsLoadingUserStore] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [userStores, setUserStores] = useState<StoreType[] | null>(null);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authErrorMessages, setAuthErrorMessages] = useState({});
  const [axiosErrorMessage, setAxiosErrorMessage] = useState("");

  useEffect(() => {}, [authErrorMessages]);
  useEffect(() => {
    setIsLoadingUserStore(true);
    // Check for an existing user cookie when the component mount
    const userIdFromCookie = getCookie("userId");
    if (userIdFromCookie) {
      // If a user cookie exists, set the user's state
      setUserInfo({
        user: { id: userIdFromCookie },
      });
    }

    // Set store for user
    if (isAuthenticated()) {
      const userId = getCookie("userId");

      apiClient.get<StoreType[]>(`/stores/owner/${userId}/`).then((res) => {
        setUserStores(res.data);
        setIsLoadingUserStore(false);
      });
    }
  }, []);

  const login = async (credentials: UserCredentialLoginType) => {
    setIsAuthenticating(true);
    try {
      // Make API call to backend auth endpoint using axios
      const res = await apiClient.post<UserData>(`/users/auth/login/`, {
        email: credentials.email,
        password: credentials.password,
      });

      console.log("res.status === 200", res.status === 200, res);
      if (res.status === 200) {
        const userData = res.data;
        console.log("userData = res.data;", userData);
        // TODO: Check for side effect
        setCookie(
          "userId",
          userData.user.id || "",
          getTokenExpirationTime(userData.access_expiration || "")
        );
        setTokens({
          access: userData.access || "",
          refresh: userData.refresh || "",
          access_expiration: userData.access_expiration || "",
          refresh_expiration: userData.refresh_expiration || "",
        });

        // store in local storage
        localStorage.setItem(
          "oldAT",
          new Date(userData.access_expiration || "").getTime().toString()
        );
        localStorage.setItem(
          "oldRT",
          new Date(userData.refresh_expiration || "").getTime().toString()
        );

        if (!!getCookie("cartId")) {
          try {
            // Try to merge cart items
            const mergeRes = await apiClient.post(
              `/carts/${getCookie("cartId")}/merge/${userData.user.id}`
            );

            // If successfully merged, remove cartId from cookie
            console.log("MergeRes", mergeRes);
            removeCookie("cartId");
            setIsAuthenticating(false);
          } catch (error) {
            console.log("MERGING ERROR", error);
            setIsAuthenticating(false);
            if (isAxiosError(error)) setAuthErrorMessages(error.response?.data);
          }
        }
        setUserInfo({
          user: { id: userData.user.id },
          // access: userData.access,
          // refresh: userData.refresh,
          // access_expiration: userData.access_expiration,
          // refresh_expiration: userData.refresh_expiration,
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
      if (isAxiosError(error)) {
        setAuthErrorMessages(error.response?.data);
        setAxiosErrorMessage(error.message);
      }

      setIsAuthenticating(false);
    }
  };

  const loginWithGoogle = async (credential: {
    access_token?: string;
    id_token?: string;
  }) => {
    setIsAuthenticating(true);
    try {
      // Make API call to backend auth endpoint using axios
      const res = await apiClient.post<UserData>(
        `/users/auth/google/`,
        credential
      );

      if (res.status === 200) {
        const userData = res.data;
        // TODO: Check for side effect
        setCookie(
          "userId",
          userData.user.id || "",
          getTokenExpirationTime(userData.access_expiration || "")
        );
        setTokens({
          access: userData.access || "",
          refresh: userData.refresh || "",
          access_expiration: userData.access_expiration || "",
          refresh_expiration: userData.refresh_expiration || "",
        });

        // Check if there is cartId in cookie
        if (!!getCookie("cartId")) {
          try {
            // Try to merge cart items
            const mergeRes = await apiClient.post(
              `/carts/${getCookie("cartId")}/merge/${userData.user.id}`
            );

            // If successfully merged, remove cartId from cookie
            console.log("MergeRes SUCCESSFULLY", mergeRes);
            removeCookie("cartId");
            setIsAuthenticating(false);
          } catch (error) {
            console.log("MERGING ERROR", error);
            setIsAuthenticating(false);
            if (isAxiosError(error)) setAuthErrorMessages(error.response?.data);
          }
        }

        setUserInfo({
          user: { id: userData.user.id },
          // access: userData.access,
          // refresh: userData.refresh,
          // access_expiration: userData.access_expiration,
          // refresh_expiration: userData.refresh_expiration,
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
      if (isAxiosError(error)) setAuthErrorMessages(error.response?.data);
    }
  };

  const register = async (credentials: UserCredentialRegType) => {
    setIsAuthenticating(true);
    try {
      const response = await apiClient.post(`/users/auth/registration/`, {
        email: credentials.email,
        password1: credentials.password1,
        password2: credentials.password2,
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        phone: credentials.phone,
      });

      if (response.status === 201) {
        // Registration successfull
        setIsRegistrationSuccessful(true);
        setIsAuthenticating(false);
        // login(credentials);
      }
    } catch (error) {
      setIsAuthenticating(false);
      if (isAxiosError(error)) setAuthErrorMessages(error.response?.data);
    }
    setIsAuthenticating(false);
  };

  const logout = () => {
    console.log("LOGOUT CALLED___DDD");
    removeCookie("userId");
    removeCookie("refreshToken");
    removeCookie("accessToken");
    setUserInfo(null);
  };

  const isAuthenticated = () => {
    // !!"user" convert to it's boolean equivalent -> true
    return !!getCookie("userId") && isAccessTokenValid();
  };

  const autoLogout = () => {
    if (!isAuthenticated()) {
      logout();
    }
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
    loginWithGoogle,
    logout,
    autoLogout,
    register,
    userStores,
    // authUserDummy,
    axiosErrorMessage,
    isAuthenticated,
    setAuthErrorMessages,
    authErrorMessages,
    isAuthenticating,
    isLoginSuccessful,
    isLoadingUserStore,
    isRegistrationSuccessful,
  };
};

export default useAuth;

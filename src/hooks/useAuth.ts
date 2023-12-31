import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { getCookie, removeCookie, setCookie } from "../utils/cookies";
import { StoreType } from "../entities/store";

interface UserData {
  id: string;
}

type UserCredentialType = {
  email: string;
  username?: string;
  password: string;
};

const useAuth = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [userStores, setUserStores] = useState<StoreType[] | null>(null);

  useEffect(() => {
    // Check for an existing user cookie when the component mount
    const userIdFromCookie = getCookie("userId");
    if (userIdFromCookie) {
      // If a use cookie exists, set the user's state
      setUser({ id: userIdFromCookie });
    }

    // Set store slug
    if (isAuthenticated()) {
      const userId = getCookie("userId");

      apiClient
        .get<StoreType[]>("/stores/owner/" + userId + "/")
        .then((res) => {
          setUserStores(res.data);
        });
    }
  }, []);

  const login = async (credentials: UserCredentialType) => {
    try {
      // Make API call to backend auth endpoint using axios
      const res = await apiClient.post<UserData>(
        "/users/auth/login/",
        credentials
      );

      console.log("Login Response", res.data);

      if (res.status === 200) {
        const userData = res.data;
        setCookie("userId", userData.id, 7); // Expires in 7 days
        setUser({ id: userData.id });
      } else {
        // TODO: Handle authentication error
        console.error("Authentication failed");
      }
    } catch (err) {
      console.error("Something went wrong while authenticating user", err);
    }
  };

  const register = async (credentials: UserCredentialType) => {
    try {
      const response = await apiClient.post(
        "/users/auth/registeration/",
        credentials
      );

      console.log("Registration Successfull", response.status, response.data);

      if (response.status === 201) {
        // Registration successfull, login automatically
        login(credentials);
      }
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  const logout = () => {
    removeCookie("userId");
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!getCookie("userId"); // !!"user" convert to it's boolean equivalent -> true
  };

  const fetchUserDummy = async (userId: string) => {
    try {
      // Make API call to backend auth endpoint using axios
      const res = await apiClient.get<UserData>("/users/" + userId + "/");

      console.log("FoundUser Response", res);

      if (res.status === 200) {
        const foundUserData = res.data;
        setCookie("userId", foundUserData.id, 8); // Expires in 8 days
        setUser({ id: foundUserData.id });
        console.log("COOKIES SET", document.cookie);
      } else {
        // TODO: Handle authentication error
        console.error("FETCH USER failed");
      }
    } catch (err) {
      console.error("Something went wrong while FETCHING user", err);
    }
  };

  return {
    user,
    login,
    logout,
    register,
    isAuthenticated,
    userStores,
    fetchUserDummy,
  };
};

export default useAuth;

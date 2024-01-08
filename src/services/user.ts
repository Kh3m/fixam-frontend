import axios from "axios";

type Address = {
  url?: string;
  id?: string;
  street_address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  is_default?: boolean;
  user?: string;
};

export type UserType = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;

  url?: string;
  id?: string;
  profile?: string;
  groups?: string;
  addresses?: Address[];
  //   TODO: Backend Fix password?: string;
  last_login?: Date;
  date_joined?: Date;
  is_superuser?: boolean;
  is_active?: boolean;
  is_vendor?: false;
};

export const userAPIClient = axios.create({
  baseURL: "https://userservice-production-39b1.up.railway.app/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

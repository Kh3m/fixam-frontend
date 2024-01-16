import { APIClient } from "./apiClient";

export type UserAddressType = {
  id?: string;
  url?: string;
  isUse?: boolean;
  street_address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  is_default: boolean;
  receiver_first_name: string;
  receiver_last_name: string;
  receiver_phone_one: string;
  receiver_phone_two: string;
  user: string;
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
  addresses?: UserAddressType[];
  //   TODO: Backend Fix password?: string;
  last_login?: Date;
  date_joined?: Date;
  is_superuser?: boolean;
  is_active?: boolean;
  is_vendor?: false;
};

export const userService = new APIClient<UserType>(`/users/`);
export const userAddressService = new APIClient<UserAddressType>(
  `/users/adresses/`
);

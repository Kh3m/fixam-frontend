// STORE
export type StoreFormDataType = {
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;

  //   Store
  storeName: string;
  businessRCNumber: string;
  slug: string;
  logo: File;
  banner: File;
  description: string;

  //   Socials
  facebookLink: string;
  igLink: string;
  xLink: string;

  agreement: boolean;
};

export type StoreResponseType = {
  id: string;
  //   members: string,
  //   socials: string,
  logo_img_url: string;
  banner_img_url: string;
  owner: string;
  name: string;
  email: string;
  phone: string;
  slug: string;
  //   website: string,
  address: string;
  description: string;
  business_license_number: string;
  //   created_at: "2023-12-19T13:17:33.304Z",
  //   updated_at: "2023-12-19T13:17:33.304Z",
};

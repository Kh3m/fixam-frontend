import { ReactNode } from "react";

export type ImageType = {
  src: string;
  alt: string;
};

export type DirectionType = {
  direction: "horizontal" | "vertical";
};

export type LinkType = { icon?: ReactNode | string; to: string; text: string };

// STORE
export type StoreFormData = {
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
  logo: FileList;
  banner: FileList;
  description: string;

  //   Socials
  facebookLink: string;
  igLink: string;
  xLink: string;

  agreement: boolean;
};

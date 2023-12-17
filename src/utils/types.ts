import { ReactNode } from "react";

export type ImageType = {
  src: string;
  alt: string;
};

export type DirectionType = {
  direction: "horizontal" | "vertical";
};

export type LinkType = { icon?: ReactNode | string; to: string; text: string };

export type InputConfigType = {
  placeholder?: string;
  type?: string;
  multiple?: boolean;
  name?: string;
  value?: string;
};

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
  logo: FileList | null;
  banner: FileList | null;
  description: string;

  //   Socials
  facebookLink: string;
  igLink: string;
  xLink: string;

  agreement: boolean;
};

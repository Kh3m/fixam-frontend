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

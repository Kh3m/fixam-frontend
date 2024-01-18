import { ReactNode } from "react";

export type ImageType = {
  src: string;
  alt: string;
};

export type DirectionType = {
  direction: "horizontal" | "vertical";
};

export type LinkType = { icon?: ReactNode | string; to: string; text: string };

export type OptionType = {
  label: string;
  value: string;
};

export type ErrorMessagesType = {
  [key: string]: string[];
};

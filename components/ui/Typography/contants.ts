import { TypographyProps } from "./types";

export const variants = {
  size: { sm: "text-sm", md: "text-base", lg: "text-xlg", xlg: "text-4xl" },
  weight: { light: "font-light", default: "font-normal", bold: "font-bold" },
  color: {
    primary: "text-accentColor",
    default: "text-blackBackground",
    secondary: "text-slate-500",
  },
} as const;

export const defaultProps: Omit<TypographyProps, "children"> = {
  color: "default",
  size: "md",
  weight: "default",
  type: "description",
};

export const contentMocked = {
  large:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the 1500s, when an unknown printer  a galley of type and scrambled it to make a type specimen book.",
  small:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

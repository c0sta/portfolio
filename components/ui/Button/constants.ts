import { ButtonProps } from "./types";

export const getStyles = (variant: ButtonProps["variant"]) => ({
  variant: {
    contained: "button--contained",
    outlined: "button--outlined",
    text: "button--text",
    icon: "button--icon",
  },
  color: {
    primary:
      (variant === "contained" && "--contained-primary") ||
      (variant === "outlined" && "--outlined-primary") ||
      (variant === "text" && "--text-primary") ||
      (variant === "icon" && "--icon-primary"),
    default:
      (variant === "contained" && "--contained-default") ||
      (variant === "outlined" && "--outlined-default") ||
      (variant === "text" && "--text-default") ||
      (variant === "icon" && "--icon-default"),
  },
});

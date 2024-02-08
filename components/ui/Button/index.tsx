import { getStyles } from "./constants";
import { ButtonProps } from "./types";

export const Button = ({
  variant,
  color,
  icon,
  label,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`group/button ${getStyles(variant).variant[variant]} ${getStyles(variant).color[color]} ${rest.className ?? ""}`}
      onClick={rest.onClick}
    >
      {label} {icon}
    </button>
  );
};

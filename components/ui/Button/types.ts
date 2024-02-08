export interface ButtonProps extends Partial<HTMLButtonElement> {
  variant: "contained" | "outlined" | "text" | "icon";
  color: "primary" | "default";
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

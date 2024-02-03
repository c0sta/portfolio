export interface TypographyProps {
  size?: "sm" | "md" | "lg" | "xlg";
  weight?: "light" | "default" | "bold";
  color?: "primary" | "default" | "secondary";
  type?: "title" | "description" | "subtitle";
  children: React.ReactNode;
}

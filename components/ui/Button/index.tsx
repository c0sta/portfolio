interface Props {
  variant: "contained" | "outlined" | "text" | "icon";
  icon?: React.ReactNode;
  label?: string;
  color?: "primary" | "default";
}
export const Button = ({ variant, color, icon, label }: Props) => {
  const styles = {
    variant: {},
    color: {},
    icon: {},
    label: {},
  };
  const className = `${styles[variant]} ${styles[color]} ${styles[label]}`;
  return <button className={}></button>;
};

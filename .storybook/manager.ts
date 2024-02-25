import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import { create } from "@storybook/theming/create";

const myTheme = create({
  base: "light",
  brandTitle: "👨🏻‍💻 Portfolio UI ",
  brandTarget: "_self",
});

addons.setConfig({
  theme: myTheme,
});

import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import { create } from "@storybook/theming/create";

const myTheme = create({
  base: "dark",
  brandTitle: "👨🏻‍💻 Portfolio UI ",
  //   brandUrl: "https://example.com",
  //   brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",
});

addons.setConfig({
  theme: myTheme,
});

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
    "design-system": {
      title: "YODA",
      //👇 The url provided by Chromatic when it was deployed
      url: "https://master--61dec7167fec2d003aa60e29.chromatic.com",
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  staticDirs: ["../public"],
  core: {
    builder: "webpack5",
  },
};

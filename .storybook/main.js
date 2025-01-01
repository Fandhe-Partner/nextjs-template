module.exports = {
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/preset-scss"],
  webpackFinal: async (config) => {
    // Enable SCSS module support
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
        "sass-loader",
      ],
    });
    return config;
  },
};

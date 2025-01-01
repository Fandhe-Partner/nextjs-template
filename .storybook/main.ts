import path from "node:path";
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    if (!config.module) {
      config.module = { rules: [] };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    // Remove any existing rules for SCSS
    config.module.rules = config.module.rules.filter((rule) => {
      if (typeof rule !== "object" || !rule || !("test" in rule)) return true;
      return rule.test?.toString() !== /\.scss$/.toString();
    });

    // Add our custom rule
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
export default config;

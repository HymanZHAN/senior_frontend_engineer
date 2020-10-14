const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/index.html",
      filename: "index.html",
      title: "TypeScript作业1",
    }),
    new CleanWebpackPlugin(),
  ],
};

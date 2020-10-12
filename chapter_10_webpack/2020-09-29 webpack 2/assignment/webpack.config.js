const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssRule = {
  test: /\.css$/,
  loader: [MiniCssExtractPlugin.loader, "css-loader"],
};

const assetRule = {
  test: /.(jpg|png|svg)$/,
  loader: "file-loader",
};

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [cssRule, assetRule],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "template/index.html" }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8888,
  },
};

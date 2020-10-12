const path = require("path");

const cssRule = {
  test: /\.css$/,
  loader: "css-loader",
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
};

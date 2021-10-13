const HTMLWebPackPlugin = require('html-webpack-plugin');

const path = require("path");

/**@type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  // entry: [path.src + 'index.js'],
  output:  {
    // filename: "build.js",
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/,
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  // mode: "development",
}
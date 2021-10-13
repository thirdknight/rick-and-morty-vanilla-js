const path = require("path");
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output:  {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
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
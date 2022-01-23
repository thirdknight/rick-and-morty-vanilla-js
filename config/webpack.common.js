
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebPackPlugin = require('html-webpack-plugin');
const path = require("path");

/**@type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output:  {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "images/[name][ext][query]",
    // filename: "[name].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/,
      },
      {
        type: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
       // Fonts and SVGs: Inline files
      { 
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'
      }

    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebPackPlugin({
      template: "./src/template.html", //filename
      filename: "index.html", //output

      
    }),
  ],
}
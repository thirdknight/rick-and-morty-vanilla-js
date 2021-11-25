const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/**@type {import('webpack').Configuration} */
const proConfig = {
  mode: "production",
  module: {
    rules: [
      {
      use: "babel-loader",
      test: /.(js)$/,
      exclude: /node_modules/
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }
    ]
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  },
  plugins: [new MiniCssExtractPlugin()],
}

module.exports = merge(common, proConfig);
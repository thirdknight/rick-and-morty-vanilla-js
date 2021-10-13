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
      }
    ]
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  }
}

module.exports = merge(common, proConfig);
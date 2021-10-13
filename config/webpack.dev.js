const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/**@type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    // contentBase: "../dist",
    static: "../dist",
    // open: "true",
    // open: "chrome",
    open: "/",
  },
  devtool: "eval-source-map",
}

module.exports = merge(common, devConfig);
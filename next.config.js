/* eslint-disable */
const withLess = require("@zeit/next-less");
const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./assets/antd-custom.less"), "utf8")
);

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = withTypescript(
  // withLess({
  //   lessLoaderOptions: {
  //     javascriptEnabled: true,
  //     modifyVars: themeVariables // make your antd custom effective
  //   },
    
  // })
  {webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.resolve.extensions = [".ts", ".tsx", ".js"];
    return config;
  }}
)


const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    index: path.join(__dirname, "..", "src", "index.js"),
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "build"),
    clean: true,
    publicPath: "http://localhost:9530/",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "assets", "index.html"),
      filename: "index.html",
      cache: false,
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "application_vue",
      filename: "remoteEntry.js",
      exposes: {
        "./bootstrap": path.join(__dirname, "..", "src", "bootstrap.js"),
      },
    }),
  ],
};

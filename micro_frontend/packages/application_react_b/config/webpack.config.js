var webpack = require("webpack"),
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin")
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const packageJson = require("../package.json");

const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  loader: require.resolve("babel-loader"),
  options: {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      require.resolve("react-refresh/babel"),
      "@babel/plugin-transform-runtime",
    ],
  },
};

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    index: path.join(__dirname, "..", "src", "index.jsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "build"),
    clean: true,
    publicPath: "http://localhost:9529/",
  },
  module: {
    rules: [
      babelLoader,
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // {
          //   loader: "style-loader",
          // },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentHashSalt: packageJson.name,
                localIdentName: '[local]_[hash:base64:5]', 
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {},
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin({ verbose: false }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "assets", "index.html"),
      filename: "index.html",
      cache: false,
    }),
    new ModuleFederationPlugin({
      name: "application_react_b",
      filename: "remoteEntry.js",
      exposes: {
        "./bootstrap": path.join(__dirname, "..", "src", "bootstrap.jsx"),
      },
    }),
    new MiniCssExtractPlugin(),
  ],
  infrastructureLogging: {
    level: "info",
  },
  // optimization: {
  //   runtimeChunk: false,
  //   minimize: false,
  //   minimizer: [
  //     new TerserPlugin({
  //       extractComments: false,
  //     }),
  //   ],
  //   // splitChunks: {
  //   //   cacheGroups: {
  //   //     commons: {
  //   //       test: /[\\/]node_modules[\\/]/,
  //   //       name: "vendor",
  //   //       chunks: "all",
  //   //     },
  //   //   },
  //   // },
  // },
};

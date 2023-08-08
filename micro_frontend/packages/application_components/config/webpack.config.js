var webpack = require("webpack"),
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
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
    publicPath: "http://localhost:9555/",
  },
  module: {
    rules: [
      babelLoader,
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "components_[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
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
      name: "component_library",
      filename: "remoteEntry.js",
      exposes: {
        "./library": path.join(__dirname, "..", "src", "library/index.jsx"),
        "./Input": path.join(
          __dirname,
          "..",
          "src",
          "library/InputComponent/index.jsx"
        ),
        "./bootstrap": path.join(__dirname, "..", "src", "bootstrap.jsx"),
      },
      shared: {
        react: {
          version: "^18.2.0",
          singleton: true,
        },
        "react-dom": {
          version: "^18.2.0",
          singleton: true,
        },
      },
    }),
    new MiniCssExtractPlugin(),
  ],
  infrastructureLogging: {
    level: "info",
  },
  // optimization: {
  //   // runtimeChunk: false,
  //   // minimize: false,
  //   // minimizer: [
  //   //   new TerserPlugin({
  //   //     extractComments: false,
  //   //   }),
  //   // ],
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

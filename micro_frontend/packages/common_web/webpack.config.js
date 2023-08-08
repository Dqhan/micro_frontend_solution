var webpack = require("webpack"),
  path = require("path"),
  env = require("./config/env"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  TerserPlugin = require("terser-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

const ASSET_PATH = process.env.ASSET_PATH || "/";

var alias = {};

var fileExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "eot",
  "otf",
  "svg",
  "ttf",
  "woff",
  "woff2",
];

const isDevelopment = process.env.NODE_ENV !== "production";

const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  loader: require.resolve("babel-loader"),
  options: {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      isDevelopment && require.resolve("react-refresh/babel"),
      "@babel/plugin-transform-runtime",
    ],
    cacheDirectory: true,
    cacheCompression: process.env.NODE_ENV === "production",
    compact: process.env.NODE_ENV === "production",
  },
};

var baseConfigs = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    index: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
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
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      babelLoader,
    ],
  },
  // externals: {
  //   'react-dom': 'ReactDOM',
  //   react: 'React',
  // },
  resolve: {
    alias: alias,
    extensions: fileExtensions
      .map((extension) => "." + extension)
      .concat([".js", ".jsx", ".ts", ".tsx", ".css"]),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin({ verbose: false }),
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "assets", "index.html"),
      filename: "index.html",
      cache: false,
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "theme"),
          to: path.resolve(__dirname, "build/theme/"),
        },
      ],
    }),
    // new WebpackManifestPlugin({
    //   fileName: 'manifest.json',
    //   publicPath: 'http://localhost:9527/',
    //   seed: {},
    // }),
    new ModuleFederationPlugin({
      name: "Micro Frontend App",
      remotes: {
        application_react_a:
          "application_react_a@http://localhost:9528/remoteEntry.js",
        application_react_b:
          "application_react_b@http://localhost:9529/remoteEntry.js",
        application_vue: "application_vue@http://localhost:9530/remoteEntry.js",
        component_library:
          "component_library@http://localhost:9555/remoteEntry.js",
        application_login:
          "application_login@http://localhost:9533/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
  ],
  infrastructureLogging: {
    level: "info",
  },
  // optimization: {
  //   minimize: false,
  //   minimizer: [
  //     new TerserPlugin({
  //       extractComments: false,
  //     }),
  //   ],
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendor',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
};

if (env.NODE_ENV === "development") {
  baseConfigs.devtool = "source-map";
} else {
  baseConfigs.optimization.minimize = true;
}

module.exports = baseConfigs;

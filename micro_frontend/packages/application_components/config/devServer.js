var WebpackDevServer = require("webpack-dev-server"),
  webpack = require("webpack"),
  config = require("./webpack.config"),
  path = require("path");

var compiler = webpack(config);

var server = new WebpackDevServer(
  {
    hot: true,
    liveReload: false,
    client: {
      webSocketTransport: "sockjs",
    },
    devMiddleware: {
      publicPath: `http://localhost:9555/`,
      writeToDisk: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    webSocketServer: "sockjs",
    host: "0.0.0.0",
    port: "9555",
    static: {
      directory: path.join(__dirname, "build"),
    },
    historyApiFallback: true,
  },
  compiler
);

(async () => {
  await server.start();
})();

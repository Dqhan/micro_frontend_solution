var fs = require('fs');
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.ASSET_PATH = '/';

var WebpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack'),
  config = require('../webpack.config'),
  env = require('./env'),
  path = require('path');

var compiler = webpack(config);

var server = new WebpackDevServer(
  {
    // https: true,
    hot: true,
    liveReload: false,
    client: {
      webSocketTransport: 'sockjs',
    },
    webSocketServer: 'sockjs',
    host: '0.0.0.0',
    port: env.PORT,
    static: {
      directory: path.join(__dirname, 'build'),
    },
    devMiddleware: {
      publicPath: `http://localhost:${env.PORT}/`,
      writeToDisk: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
    historyApiFallback: true,
    // proxy: {
    //   '/infpf': {
    //     target: 'https://127.0.0.1:3000',
    //     changeOrigin: true,
    //     secure: false,
    //     key: fs.readFileSync(path.join(__dirname, '..', 'server.key')),
    //     cert: fs.readFileSync(path.join(__dirname, '..', 'server.crt')),
    //   },
    // },
  },
  compiler
);

(async () => {
  await server.start();
})();

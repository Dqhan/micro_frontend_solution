const tailConf = require('./tailwind.config.js');

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    tailwindcss: { config: tailConf },
    autoprefixer: require('autoprefixer'),
  },
};

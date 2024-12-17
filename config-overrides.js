const path = require('path');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
    net: require.resolve('net-browserify'),
    http: require.resolve('stream-http') // Add this line for 'http' polyfill
  };
  return config;
};

const path = require('path');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false, // Add this line to avoid using 'fs' in browser build
    path: require.resolve('path-browserify'),
    net: require.resolve('net-browserify'),
    http: require.resolve('stream-http')
  };
  return config;
};

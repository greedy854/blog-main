// craco.config.js
module.exports = {
    webpack: {
      configure: (config) => {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          url: require.resolve('url/'),
          path: require.resolve('path-browserify'),
          http: require.resolve('stream-http'),
          net: require.resolve('net-browserify'),
          fs: require.resolve('browserfs'),
          querystring: require.resolve('querystring-es3'),
          buffer: require.resolve('buffer/'),
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
          util: require.resolve('util/'),
          zlib: require.resolve('browserify-zlib'),
          assert: require.resolve('assert/'),
        };
        return config;
      },
    },
  };
  
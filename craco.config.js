const Buffer = require('buffer').Buffer;

module.exports = {
  webpack: {
    configure: (config) => {
      // Ensure that Buffer is polyfilled globally
      global.Buffer = Buffer;

      config.resolve.fallback = {
        ...config.resolve.fallback,
        url: require.resolve('url/'),
        path: require.resolve('path-browserify'),
        http: require.resolve('stream-http'),
        net: require.resolve('net-browserify'),
        fs: require.resolve('browserfs'),
        querystring: require.resolve('querystring-es3'),
        buffer: require.resolve('buffer/'), // Ensure this points to the buffer polyfill
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        zlib: require.resolve('browserify-zlib'),
        assert: require.resolve('assert/'),
        vm: require.resolve('vm-browserify'),
        async_hooks: false, // You can disable async_hooks if not needed
      };
      return config;
    },
  },
};

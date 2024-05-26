const webpack = require('webpack');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'crypto': 'crypto-browserify',
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    configure: (webpackConfig) => {
      const fallback = webpackConfig.resolve.fallback || {};
      Object.assign(fallback, {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        // http: require.resolve('stream-http'),
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        'process/browser': require.resolve('process/browser'),
        vm: require.resolve('vm-browserify'),
        // url: require.resolve('url'),
      });
      webpackConfig.resolve.fallback = fallback;

      return webpackConfig;
    },
  },
};

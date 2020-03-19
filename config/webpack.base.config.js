const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '..', './index.js'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    // filename: 'webpack.bundle[hash].js',
    filename: 'webpack.bundle.js',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '..'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
      {
        oneOf: [
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ]
      }
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: '3500',
  },
  stats: 'errors-only',
  plugins: [
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: path.join(__dirname, '..', 'index.html') }),
  ],
};

const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './build/');
const APP_DIR = path.resolve(__dirname, './src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const NODE_ENV = require('process.env');

module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My Solo Project',
    template: './src/index.html'
  })],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.join(__dirname, 'build'),
    },
    port: 8080,
    proxy: {
      "*": {
        target: "http://[::1]:8081",
        changeOrigin: true,
      }
    },
  },
};
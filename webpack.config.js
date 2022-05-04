const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const NODE_ENV = require('process.env.NODE_ENV');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: production,//process.env.NODE_ENV,
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
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
      '/api': {
        target: 'http://[::1]:3000',
        secure: false,
        pathRewrite: { '^/api': '' },
        logLevel: 'debug'
      }
    },
  },
};
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const merge = require('webpack-merge');
const devServer = require('./webpack-dev-server');

function resolve (dir) {
    return path.join(__dirname, '.', dir)
  }


const baseConfig = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./outputs')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('src')],
        // 这里不能使用 babel-preset-react
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.jsx$/,
        use: [{loader: "babel-loader"}, { loader: "babel-preset-es2015" }, { loader: "babel-preset-react" }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'}, {
          loader: 'css-loader'}, {
          loader: 'less-loader'
        }],
       }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
    // new CleanWebpackPlugin(['outputs'])
  ]
};

const webpackConfig = merge(baseConfig, { devServer });


module.exports = webpackConfig;
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
    path: path.resolve('./outputs'),
    // 添加公共路径 "/"
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        include: [resolve('src')],
        // 这里不能使用 babel-preset-react
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,// font awesome loader
        loader: 'file-loader',
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.less$/, /\.css$/, /\.json$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/]
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: false
          }
        }]
      },
      {
        test: /\.(gif|png|jpg|woff|svg|ttf|eot)\??.*$/,
        loader: 'url-loader'
      },
      {
        test: /\.jsx$/,
        use: [{loader: "babel-loader"}, { loader: "babel-preset-es2015" }, { loader: "babel-preset-react" }]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          { 
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          }, 
          {
            loader: 'less-loader'
        }],
       }
    ]
  },
  plugins: [
    // use this to auto inject bundled js to index.html
    new HtmlWebPackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(['outputs'])
    new webpack.SourceMapDevToolPlugin({})
  ]
};

const webpackConfig = merge(baseConfig, { devServer });


module.exports = webpackConfig;
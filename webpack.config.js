const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

let config = {
  context: srcPath,
  entry: path.join(srcPath, 'index.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [new DashboardPlugin()],
  devtool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = config;

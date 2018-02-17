var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Create multiple instances
const extractCSS = new ExtractTextPlugin('stylesheets/foo-one.css');
const extractSASS = new ExtractTextPlugin('stylesheets/bar-two.css');

var config = {
  entry: SRC_DIR + "/app/App.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2016", "stage-2"]
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /\.less$/i,
        use: extractSASS.extract([ 'css-loader', 'sass-loader' ])
      }
    ]
  },
  plugins: [
    extractCSS,
    extractSASS
  ]
};

module.exports = config;

var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

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
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

module.exports = config;

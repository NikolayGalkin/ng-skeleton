var webpack           = require('webpack');
var CleanPlugin       = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: ['./app.js']
  },
  output: {
    path: './build',
    filename: 'bundle-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?presets=es2015', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.(woff2?|ttf|eot|svg)(.*)?$/, loader: "file?name=fonts/[name].[ext]" }
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
  ]
};

/*
var webpack           = require('webpack');
var CleanPlugin       = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATH = __dirname + '/src';

const DEBUG = JSON.stringify(process.env.DEBUG || false);

const plugins = [
  new CleanPlugin(['dist']),
  new webpack.optimize.DedupePlugin(),
  new ExtractTextPlugin("[name].css"),
  new webpack.DefinePlugin({
    DEBUG: DEBUG,
    API_URL: JSON.stringify(process.env.API_URL || 'http://api.dev.chatfuel.com'),
    MAIN_PAGE_URL: JSON.stringify(process.env.MAIN_PAGE_URL || 'http://dev.chatfuel.com'),
    MOBILE_PAGE_URL: JSON.stringify(process.env.MOBILE_PAGE_URL || 'http://dev.chatfuel.com/ru/m-dashboard.html')
  }),
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body'
  }),
  new webpack.ContextReplacementPlugin(/\/moment\/locale/, /en-gb/)
];


if (!DEBUG) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  )
}

module.exports = {
  devtool: 'source-map',
  context: PATH,

  entry: {
    app: ['./app.js']
  },

  output: {
    path: './dist',
    filename: 'bundle-[hash].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel?presets=es2015', exclude: /node_modules/ },
      { test: /\.less/, loader: ExtractTextPlugin.extract('style', 'css!less?sourceMap') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.woff2?(.*)?$/, loader: "file?name=fonts/[name].[ext]" },
      { test: /\.(ttf|eot|svg)(.*)?$/, loader: "file?name=fonts/[name].[ext]" },
			{ test: /\.tpl$/, loaders: [`ngtemplate?relativeTo=${ PATH }`, `html?root=${ PATH }`] },
    	{ test: /\.html$/, loader: 'underscore-template-loader', query: { attributes: ['img:src', 'link:href'] } },
      { test: /\.png|\.jpg|\.gif|images\/\.svg$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.json$/, loader: 'json' }
    ]
  },

  plugins: plugins,

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    colors: true,
    hot: true,
    port: 80
  }
};
*/

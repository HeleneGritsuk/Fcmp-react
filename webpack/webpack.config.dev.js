const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const assetsPath = path.join(__dirname, '..', 'public', 'assets');
const publicPath = '/assets/';

module.exports = {
  name: 'browser',

  devtool: 'eval',

	// The base directory (absolute path!) for resolving the entry option.
  context: path.join(__dirname, '..', 'src', 'client'),

  entry: {
    app: [
      './client',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ]
  },

  output: {
    path: assetsPath,
    filename: '[name].js',
    publicPath
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
		        query: {
		          presets: [ 'react-hmre' ]
		        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'src', 'node_modules'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};

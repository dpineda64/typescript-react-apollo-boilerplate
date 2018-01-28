const webpack = require('webpack');
const path = require('path');
const commons = require('./webpack.commons');

module.exports = {
  entry: [
    commons.entry
  ],
  output: commons.output,
  module: {
    loaders: [
      ...commons.module.rules
    ]
  },
  devtool: 'inline-source-map',
  resolve: commons.resolve,
  plugins:[
    ...commons.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    quiet: false,
    historyApiFallback: true,
  }
}

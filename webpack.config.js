var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtools:'eval-source-map',
  entry:  [
    'webpack-hot-middleware/client',
    path.join(__dirname,'/client/index')
  ],
  output: {
    path:'/',
    filename:'bundle.js',
    publicPath:'/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:
  {
    loaders:  [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname,'client'),
          path.join(__dirname,'server/shared')
        ],
        loaders:['react-hot-loader','babel-loader']
      }
    ]
  },
  resolve: {
    extensions:[' ','','.js']
  }
}

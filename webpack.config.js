const path = require('path');
module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      }
    ]
  }
}
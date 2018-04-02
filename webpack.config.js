const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      }
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      title: 'react-redux-blog',
      template: './src/index.html',
      hash: true,
      minify: {
        removeAttributeQuotes: true
      }
    }),
    new webpack.NamedModulesPlugin()
  ],

}

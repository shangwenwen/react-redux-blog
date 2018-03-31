/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()],
}

// // webpack.config.js
// const path = require('path')
// const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
//
// module.exports = {
//   entry: {
//     app: './src/index.js',
//     vendor: ['react', 'react-dom']
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: "[name].js",
//     publicPath: './',
//     chunkFilename: "[name].js"
//   },
//   module: {
//     rules: [
//       {
//         exclude: /node_modules|packages/,
//         test: /\.js$/,
//         use: 'babel-loader',
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'react-redux-blog',
//       minify: {
//         removeAttributeQuotes: true
//       },
//       hash: true,
//       template: './src/index.html'
//     }),
//   ],
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           chunks: 'initial',
//           minChunks: 2,
//           maxInitialRequests: 5,
//           minSize: 0
//         },
//         vendor: {
//           test: /node_modules/,
//           chunks: 'initial',
//           name: 'vendor',
//           priority: 10,
//           enforce: true
//         }
//       }
//     },
//     runtimeChunk: false
//   }
// }

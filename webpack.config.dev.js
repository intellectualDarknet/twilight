const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      minify: {
        collapseWhitespace: false
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    static: {       
      directory: path.resolve(__dirname, './dist')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [ 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: true,
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions:  ['.js', '.ts', '.tsx'],
  },
  // TODO: clarify how to work with chants
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         name: "node_vendors", 
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: "all",
  //       },
  //       common: {
  //         test: /[\\/]src[\\/]components[\\/]/,
  //         chunks: "all",
  //         minSize: 0,
  //       },
  //     }
  //   },
  // },
}
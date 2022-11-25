const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: false,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, './src/assets/imgs'),
            to: path.resolve(__dirname, './dist')
          }
        ]
        
      },
    )
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
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

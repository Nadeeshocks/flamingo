require("@babel/polyfill");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: ["@babel/polyfill", './src/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  
  devServer: {
    historyApiFallback: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all', 
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      path: path.resolve(__dirname, 'build'),
    }),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    })
  ],

  module: {
    rules: [
      {
        test: [/\.css$/, /\.scss$/],
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      },
      // transpiles JSX and ES6
      {
        test: [/\.js?$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]

      }
    ]
  }
};


// script  "start": "webpack-dev-server --open --config webpack.dev.js "
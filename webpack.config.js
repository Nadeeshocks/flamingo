const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // index: "./src/index.js",
    // another: "./src/another-module.js",
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },

  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]",
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8085,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },

      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: "url-loader",
      //   options: { limit: 10 * 1024 },
      // },
    ],
  },

  // optimization: {
  //   minimizer: [
  //     "...",
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.squooshMinify,
  //         options: {
  //           encodeOptions: {
  //             mozjpeg: {

  //               quality: 100,
  //             },
  //             webp: {
  //               lossless: 1,
  //             },
  //             avif: {

  //               cqLevel: 0,
  //             },
  //           },
  //         },
  //       },
  //     }),
  //   ],
  // },
  // plugins: [
  //   new ImageMinimizerPlugin({
  //     minimizer: {
  //       implementation: ImageMinimizerPlugin.imageminMinify,
  //       options: {
  //         plugins: [
  //           ["gifsicle", { interlaced: true }],
  //           ["jpegtran", { progressive: true }],
  //           ["optipng", { optimizationLevel: 5 }],

  //           [
  //             "svgo",
  //             {
  //               plugins:extendDefaultPlugins([
  //                 {
  //                   name: "removeViewBox",
  //                   active: false,
  //                 },
  //                 {
  //                   name: "addAttributesToSVGElement",
  //                   params: {
  //                     attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
  //                   },
  //                 },
  //               ]),
  //             },
  //           ],
  //           //
  //         ],
  //       },
  //     },
  //     // minimizerOptions: {
  //     //   plugins: [
  //     //     ["mozjpeg", { quality: 60 }],
  //     //     ["pngquant", { quality: [0.6, 0.8] }],
  //     //   ],
  //     // },
  //   }),
  // ],
};

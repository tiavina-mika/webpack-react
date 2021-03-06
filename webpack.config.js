const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = ({ env }) => {  
    return {
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'home.bundle.js'
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                      name: '[sha512:hash:base64:7].[ext]',
                  },
                },
              ],
            },
          ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html"
            })
        ],
      devtool: env === 'dev'? "eval-cheap-module-source-map": "source-map"
}};
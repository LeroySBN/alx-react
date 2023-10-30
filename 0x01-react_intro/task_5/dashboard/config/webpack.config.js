const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devServer: {
    static: path.resolve('./dist'),
    port: 8564,
    compress: true,
    open: true,
    hot: true,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        // type: 'asset/resource',
        use: [
          "file-loader",
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              bypassOnDebug: true,
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: "index.html",
      inject: false,
      template: "./dist/index.html",
    }),
  ],
};

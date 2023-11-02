const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/',
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
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'React app with Webpack config',
  //     filename: path.resolve(__dirname, './dist/index.html'),
  //   }),
  //   new CleanWebpackPlugin(),
  // ],
};

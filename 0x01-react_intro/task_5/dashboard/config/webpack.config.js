const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
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
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'React + Webpack',
  //     filename: path.resolve(__dirname, './public/index.html'),
  //   }),
  //   new CleanWebpackPlugin(),
  // ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 8564,
  },
};

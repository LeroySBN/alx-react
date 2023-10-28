const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: {
      import: path.resolve(__dirname, './modules/header/header.js'),
      dependOn: 'shared',
    },
    body: {
      import: path.resolve(__dirname, './modules/body/body.js'),
      dependOn: 'shared',
    },
    footer: {
      import: path.resolve(__dirname, './modules/footer/footer.js'),
      dependOn: 'shared',
    },
    shared: ['jquery'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    // hints: false,
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev servers, modules, and tree shaking',
      filename: path.resolve(__dirname, './public/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    open: true,
    port: 8564,
  },
};

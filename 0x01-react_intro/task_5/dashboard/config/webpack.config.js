const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    // hints: false,
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules/'],
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        {
          loader: 'style-loader!css-loader',
          options: {
            modules: true,
          },
        }],
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/,
        type: 'asset/resource',
        use: [
          'file-loader',
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
  resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app with Webpack config',
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};

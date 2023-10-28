const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: {
      import: path.resolve(__dirname, './module/header/header.js'),
      dependOn: 'shared',
    },
    body: {
      import: path.resolve(__dirname, './module/body/body.js'),
      dependOn: 'shared',
    },
    footer: {
      import: path.resolve(__dirname, './module/footer/footer.js'),
      dependOn: 'shared',
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
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
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: 'body',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8564,
  },
};

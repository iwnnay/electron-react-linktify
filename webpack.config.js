const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: './src/app.js',
    linktify: './src/linktify.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'demo/js'),
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',

        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.(scss|css)$/,
        include: path.join(__dirname, 'src/sass'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3000,
    host: '127.0.0.1',
    inline: true,
    https: false,
    hot: false,
  },
};

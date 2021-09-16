require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@src': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public'),
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true, //  타입체크 없이 트랜스파일링만. (타입체크는 ForkTsCheckWebpackPlugin 에서)
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'asset/[name].[ext]?[hash]',
        },
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: 'public/favicon.ico',
    }),
  ],
};

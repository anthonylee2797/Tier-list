const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill','./client/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
          { test:/\.scss/, use: [ 
              'style-loader', 'css-loader', 'sass-loader'
            ] },
          {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        }
      ],
    },
    devServer: {
      contentBase: [path.join(__dirname, '/'),path.join(__dirname, '/client/assets')],
      publicPath: 'http://localhost:8080/dist/',
      proxy: {
        '/getData': 'http://localhost:3000',
      }
    },
    plugins: [
      
        new HtmlWebPackPlugin({
         template: './index.html'
        }),     ]
  };
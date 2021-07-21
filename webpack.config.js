const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtracktPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    assetModuleFilename: 'assets/[name][ext][query]'
  },

  module: {
    rules: [
      {
        // test: /\.scss$/i,
        test: /\.css$/,
        use: [
          // MiniCssExtracktPlugin.loader,
          'style-loader',
          'css-loader',
          'postcss-loader'
          // 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        type: 'asset/resource',
        test: /\.(png|svg|jpg|jpeg|gif)$/i
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Meu App',
      template: './src/index.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: './src/dashboard.html'
    }),

    new MiniCssExtracktPlugin({
      filename: 'style.css'
    })
  ]
}

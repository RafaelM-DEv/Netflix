const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtracktPlugin = require('mini-css-extract-plugin')
const loader = require('sass-loader')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext][query]'
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtracktPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ]      
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
    },
    // TODO se existir muitas páginas criar um loop e concat os plugins
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),

        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            template: './src/dashboard.html'
        }),

        new MiniCssExtracktPlugin({
            filename: 'main.css'
        })
    ]
}
 
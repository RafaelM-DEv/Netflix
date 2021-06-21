const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtracktPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: "development", // "production" | "development" | "none"
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
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtracktPlugin.loader,
                    'css-loader',
                    'sass-loader'
                    // 'style-loader', 
                ],
            },

            // {
            //     test: /\.css$/i,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },

            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            
            {
            // babel transpilar nosso codigo javascript para versão mais antiga
                test: /\.js$/,
                exclude: /node_modules/, // não pegar os aquivos da pasta node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // define a versão do javascript
                    }
                }
            },
            // subistitui o file-loader do webpack mais antigo
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
        // type: 'javascript/auto'
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
        // extrai o css para fora do javascript
        new MiniCssExtracktPlugin({
            filename: 'main.css'
        }),

        new MiniCssExtracktPlugin ({
            filename: 'preview.css'
        }),

        new CleanWebpackPlugin(),

        // new CopyPlugin([
        //     { from: 'node_modules/@webcomponents/webcomponentsjs', to: 'webcomponentsjs' },
        //   ]),
    ]
}
 

// TODO esLint
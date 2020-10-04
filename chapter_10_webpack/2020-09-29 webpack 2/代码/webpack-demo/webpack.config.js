const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    devtool: 'source-map',

    entry: {
        'index': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(gif|png|jpg|webp)$/g,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: './images',
                        publicPath: '../images',
                        limit: 100
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // 输入
            template: './template/index.html',
            // 输出，针对全局的 output.path
            filename: 'index.html',
            title: "开课吧"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ]

}
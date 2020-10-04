const path = require('path');
// 当我们运行webpack命令的时候，会默认从运行命令目录去找 webpack.config.js 进行配置
// 因为webpack是node实现的，而且是运行在node环境，所以这里可以写node代码

module.exports = {
    mode: 'development',

    // webpack 配置对象
    // entry: './src/1.js',
    entry: {
        'index': './src/1.js',
        '2': './src/3.js'
    },

    output: {
        // path必须是绝对路径 d:/a/dist/
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    // 当webpack去读取一个模块的时候，默认会作为js代码去解析，但是我们可以配置一个loader的选项，来告诉webpack这个内容应该如何处理
    // module 配置，解析模块
    module: {
        // 不同的loader解析规则
        rules: [
            // 针对不同的模块的解析规则
            {
                // 针对模块的路径规则进行解析
                test: /\.txt$/,
                // 满足上面的规则以后所调用的loader解析器
                use: ['raw-loader']
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // placeholder 占位符 [name] 源资源模块的名称
                        // [ext] 源资源模块的后缀
                        name: "[name]_[hash].[ext]",
                        //打包后的存放位置
                        outputPath: "./images",
                        // 打包后文件的 url
                        publicPath: '../dist/images',
                        // 小于 100 字节转成 base64 格式
                        limit: 1000
                    }
                }
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            // 启用/禁用 url() 处理
                            url: true,
                            // 启用/禁用 @import 处理
                            import: true,
                            // 启用/禁用 Sourcemap
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    }
}
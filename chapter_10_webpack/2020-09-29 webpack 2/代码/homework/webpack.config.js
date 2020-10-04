const path = require('path');

module.exports = {

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
                        publicPath: '../dist/images'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
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
    }

}
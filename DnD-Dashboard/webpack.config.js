const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'client/src/index.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'React Drag-n-Drop',
        template: path.join(__dirname, 'client/templates/index.ejs'),
        filename: 'index.html'
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|express)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        proxy: {
            '/api': 'http://localhost:4000'
        }
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    resolveLoader: {
        moduleExtensions: ["babel-loader"]
    },
    devtool: 'source-map',
    mode: 'development',
    node: { global: true, fs: 'empty', net: 'empty', tls: 'empty' }
};
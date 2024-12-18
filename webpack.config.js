const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const ENV = process.env.NODE_ENV === "production" ? "production" : "development";
const devMode = ENV === 'development';
const target = devMode ? 'web' : "browserslist";
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode: ENV,
    target: target,
    devtool: devtool,
    entry: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        path.resolve(__dirname, "src", "index.js")
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[hash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/mainpage.hbs',
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: false,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/articlepage.hbs',
            filename: 'article.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: devMode ? 'server' : 'disabled',
            openAnalyzer: false,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin()],
    },
    cache: {
        type: 'filesystem',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: false,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    performance: {
        maxAssetSize: 200000,
        maxEntrypointSize: 200000,
    },
};




/*

Иные варианты "scripts" в package.json:

"scripts": {
"start": "webpack serve",
"build-dev": "webpack",
"build-prod": "webpack --node-env=production",
"clear": "rd /s /q dist || rimraf dist"
}

или 

"scripts": {
"start": "webpack-dev-server --mode development --open",
"dev": "webpack --mode development",
"build": "webpack --mode production",
"watch": "webpack --mode development --watch"
}

или 

"scripts": {
"start": "set NODE_ENV=development&&webpack serve",
"dev": "set NODE_ENV=development&&webpack",
"build": "set NODE_ENV=production&&webpack",
}

или
"scripts": {
"start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open",
"dev": "cross-env NODE_ENV=development webpack --mode development",
"build": "cross-env NODE_ENV=production webpack --mode production",
"watch": "cross-env NODE_ENV=development webpack --mode development --watch"
}

Потребуются и утилиты: npm install rimraf --save-dev и npm install cross-env --save-dev;

Касательно "build", может быть и такая вариация - 
"build": "webpack --config webpack.config.js"

*/
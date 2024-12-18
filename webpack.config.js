const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', 
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/mainpage.hbs', 
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/articlepage.hbs', 
            filename: 'article.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: false,
    },
    performance: {
        maxAssetSize: 200000, 
        maxEntrypointSize: 200000, 
    },
};



/*Иные варианты "scripts" в package.json:

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
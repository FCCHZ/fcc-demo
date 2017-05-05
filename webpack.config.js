var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './app');

var entry = {
    app: `${APP_DIR}/index.jsx`,
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router']
};
var plugins = [
    new HtmlWebpackPlugin({
        template: 'template.html'
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: 'vendor'
    }),
    new webpack.HotModuleReplacementPlugin()
]; 

var cssIndentifier = '[path][name]-[local]';
var cssLoader = ['style-loader', 'css-loader?localIndentName=' + cssIndentifier];
var lessLoader = ['style-loader', 'css-loader?localIndentName=' + cssIndentifier, 'less-loader'];

module.exports = {
    entry: entry,
    plugins: plugins,
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$|\.jsx$/,
            use: [{
                loader: 'babel-loader'
            }],
            include: APP_DIR,
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]'
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: cssLoader
        }, {
            test: /\.less$/,
            use: lessLoader
        }]
    },
    resolve:{
        modules: [
            "node_modules",
            APP_DIR
        ],
        extensions: [".js", ".json", ".jsx", ".css", ".gif"],
    },
    devtool: "cheap-source-map"
};
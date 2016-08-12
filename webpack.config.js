/**
 * Created by AllenFeng on 2016/7/4.
 */
var webpack = require('webpack');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './src/app/main.js',
        './src/styles/main.scss'
    ],
    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "/public/",
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }],
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel'
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin .extract("style", "css!sass?sourceMap")
        }]
    },
    resolve: {
        extension: ['', '.js', '.jsx'],
/*        alias: {
            'react': path.join(__dirname, 'node_modules', 'react/dist/react.min.js'),
            'reactdom': path.join(__dirname, 'node_modules', 'react-dom/dist/react-dom.min.js')
        }*/
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.ProvidePlugin({
        "React": "react",
        "ReactDOM": "react-dom",
        "_": "lodash",
        "classnames":"classnames"
    }),new ExtractTextPlugin("[name].css",{allChunks: true})
    ]
};
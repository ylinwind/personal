var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "js/"+"[name][hash].js"
    },
    resolve: {
        extensions: [".js",".jsx", ".json"]
    },
    module: {
        rules: [
            { test: /\.js$/,exclude: /node_modules/,loader: 'babel-loader',query: {presets: ['es2015', 'react' ,'stage-0']}},
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader!postcss-loader' }, 
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(woff|svg|eot|ttf)?$/, loader: "url-loader" },
            { test: /\.(png|jpg)$/,loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'}
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "node_modules/react/umd/react.production.min.js", to: "js/react.min.js" },
            { from: "node_modules/react-dom/umd/react-dom.production.min.js", to: "js/react-dom.min.js" },
            { from: "index.html", to: "index.html" },
            { from: "public/favicon.ico", to: "favicon.ico" }
        ]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index-build.html'),
            filename: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

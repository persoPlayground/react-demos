const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
   entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'client')
    },
   // devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
        contentBase: path.join(__dirname, 'client')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                { loader: 'style-loader' },
               // { loader: 'css-loader' },
                 { loader: 'postcss-loader' }
                ],
            }
        ]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: false
          })
        ]
      }

}
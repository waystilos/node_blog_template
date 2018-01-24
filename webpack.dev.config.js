const webpack = require('webpack');
const path = require('pack');

module.exports = {
    entry: [
        path.join(__dirname, '/app.js')
    ],
    module : {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.sass$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
};
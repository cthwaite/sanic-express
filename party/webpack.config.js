const webpack = require('webpack');
const path = require('path');
const fileSystem = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// paths
const SOURCE_DIR = 'src';
const OUTPUT_DIR = 'build';

const copyPatterns = [
    {
        from: path.join(__dirname, SOURCE_DIR, 'index.html'),
        to: path.join(__dirname, OUTPUT_DIR, 'index.html')
    },
    {
        from: path.join(__dirname, SOURCE_DIR, 'server.js'),
        to: path.join(__dirname, OUTPUT_DIR, 'server.js')
    }
];

options = {
    entry: {
        index: path.join(__dirname, SOURCE_DIR, 'index.js'),
    },
    module: {
        rules: [{test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }]
    },
    output: {
        path: path.join(__dirname, OUTPUT_DIR),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin(copyPatterns)
    ],
    mode: 'development'
};
module.exports = options;

/*eslint-disable*/
const path = require('path');
const webpack = require('webpack');

const babelSettings = {
    extends: path.join(__dirname, '/.babelrc')
};

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:4000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
        publicPath: '/build/'
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __BUILD__: JSON.stringify('DEV'),
            __PID__: JSON.stringify(process.env.pid) || JSON.stringify('BASE')
        }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    module: {
        noParse: [/jszip.js$/],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot-loader', `babel-loader?${JSON.stringify(babelSettings)}`],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};

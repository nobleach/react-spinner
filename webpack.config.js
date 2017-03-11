var path = require('path');
var webpack = require('webpack');

var entry = ['./example/index.js'];

if (process.env.NODE_ENV === 'development') {
    entry = entry.concat([
        'webpack-dev-server/client?http://localhost:7000',
        'webpack/hot/only-dev-server',
    ]);
}

module.exports = {
    devtool: 'eval',
    entry: entry,
    output: {
        path: path.join(__dirname, 'example'),
        filename: 'bundle.js',
        publicPath: '/example/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /build|lib|node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]'
            }
        ],
    },
};

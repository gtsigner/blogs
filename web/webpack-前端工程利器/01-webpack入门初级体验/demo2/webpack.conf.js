module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bunble.js'
    },
    //loader
    module: [{
        loaders: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }]
};

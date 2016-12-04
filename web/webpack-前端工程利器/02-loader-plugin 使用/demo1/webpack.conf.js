module.exports = {
    entry: './src/build.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jade$/,
            exclude: /node_modules/,
            loader: 'jade'
        }]
    }
};
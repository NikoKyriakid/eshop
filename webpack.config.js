const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'public/js');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: [
        path.join(APP_DIR, 'index.js')
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    context: __dirname,
    resolve: {
        // Add '.js' and '.jsx' as resolvable extensions.
        extensions: [".jsx", ".js", ".json"]
    },
    // devtool: "source-map",
    // plugins: [
    //     new UglifyJsPlugin({
    //         sourceMap: true
    //     })
    // ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            }
        ]
    }
};
import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'source-map',
    mode: 'development',
    entry: [ 
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: [ 'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    }
}
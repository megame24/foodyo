import express from 'express';
import path from 'path';


import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();
const port = process.env.PORT || 3000;

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
    console.log('server started at port:', port);
});
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config';
import config from './config';

const staticDir = path.join(__dirname, 'dist');
const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    filename: webpackConfig.output.filename,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(staticDir));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(config.port, config.host, () => {
    console.log(`server is running at: ${config.host}:${config.port}`);
});
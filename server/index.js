import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webpackHotMiddleware from 'webpack-hot-middleware';
import users from './route/users'
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());

app.use('/api/users',users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot:true,
  publicPath:webpackConfig.output.publicPath,
  noInfo:false
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html'));
 });

app.listen(3000, () => console.log('running on port 3000'));

const express = require('express');
const webpack = require('webpack');
const path = require('path');
const open = require('open');
const config = require('./webpack.config.babel');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../web/index.html'));
});

/* eslint-disable consistent-return */
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  open(`http://localhost:${port}`);
});

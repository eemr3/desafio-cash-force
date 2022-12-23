const express = require('express');
const Router = require('../routes');
const app = express();

app.use('/user', Router.UserRouter);
module.exports = {
  app,
};

const express = require('express');
const Router = require('../routes');
const app = express();

app.use('/user', Router.UserRouter);
app.use('/buyer', Router.BuyerRouter);
app.use('/order', Router.OrderRouter);

module.exports = {
  app,
};

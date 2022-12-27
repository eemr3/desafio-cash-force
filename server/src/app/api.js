const express = require('express');
const cors = require('cors');
const Router = require('../routes');
const app = express();

app.use(cors('*'));

app.use('/user', Router.UserRouter);
app.use('/buyer', Router.BuyerRouter);
app.use('/order', Router.OrderRouter);
app.use('/provider', Router.ProviderRouter);

module.exports = {
  app,
};

const express = require('express');
const OrderController = require('../../controllers/order.controller');

const reoute = express.Router();

reoute.get('/', OrderController.findAllOrder);

module.exports = reoute;

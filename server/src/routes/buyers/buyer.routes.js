const express = require('express');
const BuyerController = require('../../controllers/buyer.controller');

const reoute = express.Router();

reoute.get('/', BuyerController.findAllBuyer);

module.exports = reoute;

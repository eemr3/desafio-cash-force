const express = require('express');
const BuyerController = require('../../controllers/buyer.controller');

const router = express.Router();

router.get('/', BuyerController.findAllBuyer);

module.exports = router;

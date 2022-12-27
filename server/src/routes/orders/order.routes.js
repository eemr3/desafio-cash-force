const express = require('express');
const OrderController = require('../../controllers/order.controller');

const router = express.Router();

router.get('/', OrderController.findAllOrder);

module.exports = router;

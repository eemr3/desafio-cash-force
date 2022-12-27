const express = require('express');
const ProviderController = require('../../controllers/provider.controller');

const router = express.Router();

router.get('/:id', ProviderController.findPrivderById);

module.exports = router;

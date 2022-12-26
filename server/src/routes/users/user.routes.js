const express = require('express');
const UserController = require('../../controllers/user.controller');

const reoute = express.Router();

reoute.get('/', UserController.findAllUsers);

module.exports = reoute;

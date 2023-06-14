const express = require('express');
const mainController = require('../controller/main');
const router = express.Router();

router.get('/', mainController.getIndex);

router.post('/', mainController.postAddProduct);

module.exports = router;

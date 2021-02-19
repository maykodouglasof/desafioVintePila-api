const express = require('express');
const router = express.Router();

const SessionController = require('../controller/SessionController');

router.post('/', SessionController.create);

module.exports = router;
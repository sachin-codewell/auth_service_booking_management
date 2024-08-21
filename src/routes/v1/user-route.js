const express = require('express');

const { UserController } = require('../../controllers/index');
const router = express.Router();

router.get('/', UserController.createUser)

module.exports = router;
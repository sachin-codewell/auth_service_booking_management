const express = require('express');

const { UserController } = require('../../controllers/index');
const router = express.Router();

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.get('/dummy', UserController.isAuthenticated);
router.get('/:id', UserController.getUser);

module.exports = router;
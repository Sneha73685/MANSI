const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { signIn } = require('../controllers/authController');

router.post('/register', userController.createUser);

router.post('/signin', signIn);

router.get('/:email', userController.findUser);

router.get('/', userController.findAllUsers);

module.exports = router;
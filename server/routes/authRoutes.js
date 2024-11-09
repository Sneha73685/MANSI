const express = require('express');
const router = express.Router();
const { signIn } = require('../controllers/authController');

router.post('/signin', signIn);

module.exports = router;

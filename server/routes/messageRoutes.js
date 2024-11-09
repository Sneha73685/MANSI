const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, messageController.createMessage);

router.get('/:id',authMiddleware,  messageController.findMessage);

router.get('/session/:sessionId',authMiddleware, messageController.findAllMessagesBySession);

module.exports = router;

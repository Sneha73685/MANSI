const express = require('express');
const router = express.Router();
const privacyController = require('../controllers/privacyController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/settings',authMiddleware, privacyController.createOrUpdatePrivacy);

router.get('/:userId', authMiddleware, privacyController.findPrivacySettings);

module.exports = router;


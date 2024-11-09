const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, reviewController.createReview);

router.get('/:id', authMiddleware, reviewController.findReview);

router.get('/professional/:professionalId', authMiddleware, reviewController.findAllReviewsByProfessional);

module.exports = router;

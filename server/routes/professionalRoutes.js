const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', professionalController.createProfessional);

router.get('/:id',authMiddleware, professionalController.findProfessional);

router.get('/', authMiddleware, professionalController.findAllProfessionals);

module.exports = router;

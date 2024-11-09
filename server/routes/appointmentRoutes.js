const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, appointmentController.createAppointment);

router.get('/:id', authMiddleware, appointmentController.findAppointment);

router.get('/', authMiddleware, appointmentController.findAllAppointments);

module.exports = router;

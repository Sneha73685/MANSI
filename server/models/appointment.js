const mongoose = require('mongoose');
const { z } = require('zod');

const appointmentZodSchema = z.object({
    userId: z.string().min(1),
    professionalId: z.string().min(1),
    date: z.date(),
    time: z.string().min(1),
    status: z.enum(['scheduled', 'completed', 'canceled']).optional(),
});

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' }
});

module.exports = {
    Appointment: mongoose.model('Appointment', appointmentSchema),
    appointmentZodSchema
};

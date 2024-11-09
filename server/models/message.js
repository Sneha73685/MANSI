const mongoose = require('mongoose');
const { z } = require('zod');

const messageZodSchema = z.object({
    sender: z.string().min(1),
    receiver: z.string().min(1),
    text: z.string().min(1),
    timestamp: z.date().optional(),
    sessionId: z.string().min(1),
});

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true }
});

module.exports = {
    Message: mongoose.model('Message', messageSchema),
    messageZodSchema
};
 
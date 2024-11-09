const mongoose = require('mongoose');
const { z } = require('zod');

const reviewZodSchema = z.object({
    userId: z.string().min(1),
    professionalId: z.string().min(1),
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
});

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = {
    Review: mongoose.model('Review', reviewSchema),
    reviewZodSchema
};

const mongoose = require('mongoose');
const { z, number } = require('zod');

const professionalZodSchema = z.object({
    userId: z.string().min(1),
    qualifications: z.string().min(1),
    specialties: z.array(z.string()).optional(),
    availability: z.boolean().optional(),
});

const professionalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    qualifications: { type: String, required: true },
    specialties: [String],
    availability: { type: Boolean, default: false },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    createdAt: { type: Date, default: Date.now },
    feePerSession: {type: Number}
});

module.exports = {
    Professional: mongoose.model('Professional', professionalSchema),
    professionalZodSchema
};

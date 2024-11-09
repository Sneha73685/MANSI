const mongoose = require('mongoose');
const { z } = require('zod');

const privacyZodSchema = z.object({
    userId: z.string().min(1),
    anonymous: z.boolean().optional(),
    dataSharingConsent: z.boolean().optional(),
});

const privacySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    anonymous: { type: Boolean, default: false },
    dataSharingConsent: { type: Boolean, default: false }
});

module.exports = {
    Privacy: mongoose.model('Privacy', privacySchema),
    privacyZodSchema
};

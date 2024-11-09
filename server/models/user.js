const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { z } = require('zod');

const userZodSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(['user', 'professional']).optional(),
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'professional'], default: 'user' },
    createdAt: { type: Date, default: Date.now },
    privacySettings: { type: mongoose.Schema.Types.ObjectId, ref: 'Privacy' }
});
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = {
    User: mongoose.model('User', userSchema),
    userZodSchema
};

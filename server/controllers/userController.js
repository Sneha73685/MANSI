const { User, userZodSchema } = require('../models/user');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    const validation = userZodSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json(validation.error.errors);

    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

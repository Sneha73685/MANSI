const { Message, messageZodSchema } = require('../models/message');

exports.createMessage = async (req, res) => {
    const validation = messageZodSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json(validation.error.errors);

    try {
        const newMessage = await Message.create(req.body);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findMessage = async (req, res) => {
    try {
        const message = await Message.findOne({ _id: req.params.id });
        if (!message) return res.status(404).json({ message: 'Message not found' });
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAllMessagesBySession = async (req, res) => {
    try {
        const messages = await Message.find({ sessionId: req.params.sessionId });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

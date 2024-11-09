const { Privacy, privacyZodSchema } = require('../models/privacy');

exports.createOrUpdatePrivacy = async (req, res) => {
    const validation = privacyZodSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json(validation.error.errors);

    try {
        const privacySettings = await Privacy.findOneAndUpdate(
            { userId: req.body.userId },
            req.body,
            { new: true, upsert: true }
        );
        res.json(privacySettings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findPrivacySettings = async (req, res) => {
    try {
        const privacy = await Privacy.findOne({ userId: req.params.userId });
        if (!privacy) return res.status(404).json({ message: 'Privacy settings not found' });
        res.json(privacy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

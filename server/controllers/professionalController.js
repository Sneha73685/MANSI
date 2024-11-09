const { Professional, professionalZodSchema } = require('../models/professional');

exports.createProfessional = async (req, res) => {
    const validation = professionalZodSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json(validation.error.errors);

    try {
        const newProfessional = await Professional.create(req.body);
        res.status(201).json(newProfessional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findProfessional = async (req, res) => {
    try {
        const professional = await Professional.findOne({ _id: req.params.id });
        if (!professional) return res.status(404).json({ message: 'Professional not found' });
        res.json(professional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAllProfessionals = async (req, res) => {
    try {
        const professionals = await Professional.find();
        res.json(professionals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const { Review, reviewZodSchema } = require('../models/review');

exports.createReview = async (req, res) => {
    const validation = reviewZodSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json(validation.error.errors);

    try {
        const newReview = await Review.create(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findReview = async (req, res) => {
    try {
        const review = await Review.findOne({ _id: req.params.id });
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAllReviewsByProfessional = async (req, res) => {
    try {
        const reviews = await Review.find({ professionalId: req.params.professionalId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const reviewService = require("../service/reviewService");

const createReview = async (req, res) => {
    try {
        const review = await reviewService.createReview(req.body);

        return res.status(201).json({
            success: true,
            message: "Review created successfully",
            data: review,
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
            data: null,
        });
    }
};

const getReviews = async (req, res) => {
    try {
        const result = await reviewService.getReviews(req.query);

        return res.status(200).json({
            success: true,
            message: "Reviews fetched successfully",
            data: result,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: null,
        });
    }
};

module.exports = {
    createReview,
    getReviews,
};
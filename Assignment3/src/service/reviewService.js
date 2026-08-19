const ReviewModel = require("../model/reviewModel");

const createReview = async (data) => {
    const { title, comment, rating, reviewerName } = data;

    const alreadyReviewed = await ReviewModel.findOne({
        reviewerName,
        title,
    });

    if (alreadyReviewed) {
        throw new Error("You have already given a review for this title");
    }

    const review = await ReviewModel.create({
        title,
        comment,
        rating,
        reviewerName,
    });

    return review;
};

const getReviews = async (queryParams) => {
    const {
        status,
        page = 1,
        limit = 10,
        sortBy = "createdAt:desc",
    } = queryParams;

    const filter = {};

    if (status) {
        filter.status = status;
    }

    const allowedSortFields = ["rating", "createdAt"];

    const [sortField, sortOrder] = sortBy.split(":");

    if (!allowedSortFields.includes(sortField)) {
        throw new Error("Invalid sort field");
    }

    const sort = {
        [sortField]: sortOrder === "asc" ? 1 : -1,
    };

    const skip = (page - 1) * limit;

    const [reviews, total] = await Promise.all([
        ReviewModel.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(Number(limit)),

        ReviewModel.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
        reviews,
        total,
        page: Number(page),
        totalPages,
    };
};

module.exports = {
    createReview,
    getReviews,
};
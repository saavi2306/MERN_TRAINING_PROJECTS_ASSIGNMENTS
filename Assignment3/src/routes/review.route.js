
const express = require("express");

const reviewController = require("../controller/reviewController");

const router = express.Router();

router.post("/createReview", reviewController.createReview);

router.get("/getReviews", reviewController.getReviews);

router.get("/getSingleReview/:id" ,reviewController.getReviewById);

router.patch("/updateReview/:id" , reviewController.updateReviewById);

router.delete("/deleteReview/:id" , reviewController.deleteReview);

module.exports = router;
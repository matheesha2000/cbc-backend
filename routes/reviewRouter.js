import express from "express";
import { createReview, getReviews, updateReview, deleteReview } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", createReview);
reviewRouter.get("/", getReviews);
reviewRouter.put("/:reviewId", updateReview);
reviewRouter.delete("/:reviewId", deleteReview);

export default reviewRouter;

import Review from "../models/review.js";
import { isUser, isAdmin } from "./userController.js";


// Create a new review
export async function createReview(req, res) {
    if (!isUser(req)) {
      return res.json({ message: "Please login as a user to leave a review" });
    }
  
    try {
      const { productId, rating, comment } = req.body;
  
      const newReview = new Review({
        productId,
        user: req.user.email,
        rating,
        comment,
      });
  
      await newReview.save();
  
      res.status(201).json({ message: "Review added successfully", review: newReview });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all reviews for a product
export async function getReviews(req, res) {
    try {
      const { productId } = req.query;
      
      if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
      }
  
      const reviews = await Review.find({ productId });
  
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update a review
export async function updateReview(req, res) {
    if (!isUser(req)) {
      return res.json({ message: "Please login as a user to update your review" });
    }
  
    try {
      const { reviewId } = req.params;
      const { rating, comment } = req.body;
  
      const review = await Review.findOne({ _id: reviewId, user: req.user.email });
  
      if (!review) {
        return res.status(404).json({ message: "Review not found or unauthorized" });
      }
  
      review.rating = rating;
      review.comment = comment;
  
      await review.save();
  
      res.status(200).json({ message: "Review updated successfully", review });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a review
export async function deleteReview(req, res) {
    if (!isUser(req) && !isAdmin(req)) {
      return res.json({ message: "Unauthorized to delete reviews" });
    }
  
    try {
      const { reviewId } = req.params;
  
      const review = await Review.findOneAndDelete({ _id: reviewId });
  
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
  
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
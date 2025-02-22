import Review from "../models/review.js";
import { isUser } from "./userController.js";


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
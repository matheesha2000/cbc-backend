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
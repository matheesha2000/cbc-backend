import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    user: {
      type: String, // Storing email instead of ObjectId for simplicity
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;

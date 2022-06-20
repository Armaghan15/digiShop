import mongoose from "mongoose";

// Defining the review schema which will create reviews for each product
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true, maxLenght: 25 },
    rating: { type: Number, required: true, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);

// Defining the product schema
const productSchema = mongoose.Schema({
  // User (idAdmin: true), who created this product
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  // Name
  name: {
    type: String,
    required: true,
  },
  // description
  description: {
    type: String,
    required: true,
  },
  // price
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  // Image
  image: {
    type: String,
    required: true,
  },
  // rating
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  // brand
  brand: {
    type: String,
    required: true,
  },
  // catergory
  category: {
    type: String,
    required: true,
  },
  // Number of reviews
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  // Stock amount
  countInStock: {
    type: Number,
    requrired: true,
    default: 0,
  },
  // reviews
  reviews: [reviewSchema],
});

const Product = mongoose.model("Product", productSchema);

export default Product;

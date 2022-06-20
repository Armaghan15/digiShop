import mongoose from "mongoose";

// Defining the Order Schema
const orderSchema = mongoose.Schema({
  // User responsible for making this order
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // All the items in this order
  orderItems: [
    {
      name: { type: String, reqired: true },
      quantity: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  // Shipping Address
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  // Payment Method
  paymentMethod: {
    type: String,
    required: true,
  },
  // Payment Result
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
  },
  // Tax Price
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  // Shipping Price
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  // Total Price
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  // isPaid?
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  // Paid at
  paidAt: {
    type: Date,
  },
  // isDelivered?
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  // Delivered at
  deliveredAt: {
    type: Date,
  },
});

// Defining the model for orderSchema
const Order = mongoose.model("Order", orderSchema);

export default Order;

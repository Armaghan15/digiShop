import mongoose from "mongoose";

// Defining the user schema
const userSchema = mongoose.Schema(
  {
    // Name
    name: {
      type: String,
      required: true,
    },
    // Email
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Password
    password: {
      type: String,
      required: true,
    },
    // isAdmin
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timeStamps: true }
);

// Creating the User Model
const User = mongoose.model("User", userSchema);

export default User;

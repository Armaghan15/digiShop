import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
import { handle404, customErrorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(handle404);
app.use(customErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `SERVER UP AND RUNNING IN ${process.env.NODE_ENV} ON PORT ${PORT}`.bgCyan
      .brightWhite.bold.underline.italic
  )
);

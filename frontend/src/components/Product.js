import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Imports for exteral files
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link style={{ textDecoration: "none" }} to={`/product/${product._id}`}>
          <Card.Title className="productTitle" as="div">
            <strong style={{ fontWeight: "bold" }}>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color="#E67A00"
          />
        </Card.Text>

        <Card.Text className="pt-3" as="h3">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

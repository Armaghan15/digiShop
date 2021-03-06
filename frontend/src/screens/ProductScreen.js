import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Imports for external files
import Rating from "../components/Rating";
import { productDetailsAction } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(productDetailsAction(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-dark  my-3 rounded" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              {/* Product Name */}
              <ListGroup.Item className="pb-4">
                <h4>{product.name}</h4>
              </ListGroup.Item>

              {/* Product Rating */}
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color="#E67A00"
                />
              </ListGroup.Item>

              {/* Product Price */}
              <ListGroup.Item style={{ display: "flex" }} className="py-3">
                Price: <h3 style={{ marginLeft: "5px" }}>${product.price}</h3>
              </ListGroup.Item>

              {/* Product Description */}
              <ListGroup.Item>
                {/* <h4>Description:</h4> */}
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Add to Cart Column */}
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                {/* Price Item */}
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                {/* Status Item */}
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock >= 1
                          ? "In Stock"
                          : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                {/* Button Item */}
                <ListGroup.Item>
                  <Button
                    style={{ width: "100%" }}
                    className="btn-block rounded"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;

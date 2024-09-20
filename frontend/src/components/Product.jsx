import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded card">
      <Link to={`/product/${product._id}`}>
        <div className="card-image">
          <img src={product.image} />
        </div>
        <Card.Body>
          <Card.Title as="div">
            <strong>
              {product.name.toString().length >= 25
                ? product.name.toString().slice(0, 25).concat("...")
                : product.name.toString()}
            </strong>
          </Card.Title>
          <Card.Text as='div'>
            <Rating value={ product.rating } text={`${product.numReviews} reviews`} />  
          </Card.Text>
          <Card.Text className="h3 my-2">${product.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Product;

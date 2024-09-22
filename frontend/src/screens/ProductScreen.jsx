import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import products from "../products";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({})

  const { id: productId } = useParams();

  useEffect(()=>{
    const fetchProducts = async () =>{
      const {data} = await axios.get(`/api/products/${productId}`)
      setProduct(data)
    }
    fetchProducts()
  },[productId])

  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5} className="product-page-image">
          <img src={product.image} alt={product.name} />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item><b>Description:</b> {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    <strong>{product.countInStocks > 0 ? <span className="text-success">In Stock</span>:<span className="text-danger">Out Of Stock</span>}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn btn-dark" type="button" disabled={product.countInStocks === 0}>Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;

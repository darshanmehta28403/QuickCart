import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios'

const HomeScreen = () => {
  
  const [myProducts, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async() =>{
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }

    fetchProducts();
  },[])

  return (
    <>
      <h1 className="my-3">Latest Products</h1>
      <Row>
        {myProducts.map((p) => (
          <Col sm={12} md={6} lg={3} key={p._id}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

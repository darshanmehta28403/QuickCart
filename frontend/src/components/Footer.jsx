import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p className="text-white mb-0 fw-bold">QuickCart &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

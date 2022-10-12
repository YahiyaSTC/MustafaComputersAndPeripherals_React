import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'

function Footer() {
  return (
    <footer className="py-5">
      <Container>
        <Row className="footer_head text-center mb-5">
          <Col md={12} className="my-3">
            <h2>Have questions? We have answers!</h2>
          </Col>
          <Col md={12} className="my-3">
            <p>
              Fill in the form and our specialists will get in touch with you as
              soon as possible
            </p>
          </Col>
          <Col md={12} className="my-3">
            <Button variant="primary">CONTACT US</Button>
          </Col>
        </Row>
        <Row className="footer_mid">
          <Col></Col>
        </Row>
        <Row className="footer_bottom">
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

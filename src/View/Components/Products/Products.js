import React from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  return (
    <section className="product">
      <Container>
        <Row className="head text-center">
          <Col sm={12}>
            <h2>Our Products</h2>
          </Col>
        </Row>
        <Row className="body my-5">
          <Col lg={3}>
            <div className="product_listing">
              <h4 className="my-5">LCD PRODUCTS</h4>
              <ListGroup as="ul">
                <ListGroupItem as="li">LCD Video Wall</ListGroupItem>
                <ListGroupItem as="li">Digital Signage</ListGroupItem>
                <ListGroupItem as="li">Interactive Flat Panel</ListGroupItem>
                <ListGroupItem as="li">CCTV Monitor</ListGroupItem>
                <ListGroupItem as="li">Commercial TV</ListGroupItem>
                <ListGroupItem as="li">Multi-touch Table</ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={3}>
            <div className="product_listing">
              <h4 className="my-5">LCD PRODUCTS</h4>
              <ListGroup as="ul">
                <ListGroupItem as="li">LCD Video Wall</ListGroupItem>
                <ListGroupItem as="li">Digital Signage</ListGroupItem>
                <ListGroupItem as="li">Interactive Flat Panel</ListGroupItem>
                <ListGroupItem as="li">CCTV Monitor</ListGroupItem>
                <ListGroupItem as="li">Commercial TV</ListGroupItem>
                <ListGroupItem as="li">Multi-touch Table</ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={3}>
            <div className="product_listing">
              <h4 className="my-5">LCD PRODUCTS</h4>
              <ListGroup as="ul">
                <ListGroupItem as="li">LCD Video Wall</ListGroupItem>
                <ListGroupItem as="li">Digital Signage</ListGroupItem>
                <ListGroupItem as="li">Interactive Flat Panel</ListGroupItem>
                <ListGroupItem as="li">CCTV Monitor</ListGroupItem>
                <ListGroupItem as="li">Commercial TV</ListGroupItem>
                <ListGroupItem as="li">Multi-touch Table</ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={3}>
            <div className="product_listing">
              <h4 className="my-5">LCD PRODUCTS</h4>
              <ListGroup as="ul">
                <ListGroupItem as="li">LCD Video Wall</ListGroupItem>
                <ListGroupItem as="li">Digital Signage</ListGroupItem>
                <ListGroupItem as="li">Interactive Flat Panel</ListGroupItem>
                <ListGroupItem as="li">CCTV Monitor</ListGroupItem>
                <ListGroupItem as="li">Commercial TV</ListGroupItem>
                <ListGroupItem as="li">Multi-touch Table</ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>

        <Row >
          <Col className="text-center my-5">
            <Button variant="primary">DOWNLOAD FULL CATALOG</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Products;

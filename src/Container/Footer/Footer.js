import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Offcanvas,
  Form
} from "react-bootstrap";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="pt-5">
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
            <Example />
          </Col>
        </Row>
        <Row className="footer_mid">
          <Col md={12}>
            <h3>Contacts</h3>
          </Col>
          <Col md={12} className="d-flex justify-content-between foot_">
            {/* <Col md={12} lg={4}> */}
            <p>
              B12, 2/F, Dongmeng Building, No.690 Minzhi Avenue, Xinniu
              Community, Minzhi Street, Longhua District, Shenzhen City,
              Guangdong Province, China
            </p>
            {/* </Col> */}
            {/* <Col md={12} lg={4}> */}
            <ListGroup as="ul">
              <ListGroupItem as="li">
                <Link to="tel:+8618665975338">
                  <i class="fa-solid fa-phone-volume"></i>+8618665975338
                </Link>
              </ListGroupItem>
              <ListGroupItem as="li">
                <Link to="mailto:info@arkadiko.tech">
                  <i class="fa-solid fa-envelope"></i>info@arkadiko.tech
                </Link>
              </ListGroupItem>
            </ListGroup>
            {/* </Col> */}
            {/* <Col md={12} lg={4}> */}
            <ListGroup as="ul" className="footer_list">
              <ListGroupItem as="li">
                <i className="fa-brands fa-facebook-f"></i>
              </ListGroupItem>
              <ListGroupItem as="li">
                <i className="fa-brands fa-linkedin"></i>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className="footer_bottom pb-2">
          <Col>
            <p>© Arkadiko. All right reserved, 2018-2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-100">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="m-auto text-center">
            {" "}
            <h2>Contact Form </h2>{" "}
            <p>Fill in the form and our product expert will contact you</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {["CONTACT US"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Footer;

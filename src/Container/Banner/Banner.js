import React from "react";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import ContactForm from "../ContactForm/ContactForm";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_main">
        {/* <Container> */}
        <div className="heading">
          <h1>INTERACTIVE FLAT PANEL</h1>
          {/* <h1>Visual Technology Solutions</h1> */}
        </div>
        <ListGroup as="ul" className="list">
          <ListGroupItem as="li">SMART</ListGroupItem>
          <ListGroupItem as="li">INTUITIVE</ListGroupItem>
          <ListGroupItem as="li">RELIABLE</ListGroupItem>
        </ListGroup>
        <div className="body">
          <ContactForm />
        </div>

        {/* </Container> */}
      </div>
      <div className="list_">
        <div className="chs">
        <Container>
          <ListGroup as="ul" className="">
            <ListGroupItem as="li">
              <i className="fa-brands fa-facebook-f"></i>
            </ListGroupItem>
            <ListGroupItem as="li">
              <i className="fa-brands fa-linkedin"></i>
            </ListGroupItem>
          </ListGroup>
        </Container>
        </div>
      </div>
    </div>
  );
}

export default Banner;

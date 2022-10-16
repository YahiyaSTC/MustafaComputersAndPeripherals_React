import React, { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
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

  const [state , setState] = useState()

  const  listenScrollEvent = (e) => {
     if (window.scrollY > 400) {
      setState({opacity:7.459})
    } else {
      setState({opacity:0})
    }
  }

  useEffect(() => {window.addEventListener('scroll',listenScrollEvent)},[])
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
            <ContactForm />
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
          <Row>
          <Col>
          <div className="gototop">
            <div className="gototop_">
            <div className={state}>
            <i class="fa-solid fa-angle-up"></i>
            </div>
            </div>
          </div>
          </Col>
        </Row>
        </Row>
        
      </Container>
    </footer>
  );
}

export default Footer;

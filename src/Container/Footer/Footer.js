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
  Form,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  const [state, setState] = useState();

  const listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      setState({ opacity: 7.459 });
    } else {
      setState({ opacity: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
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
        <Row className="footer_mid pb-5">
          <Col md={12}>
            <h3>Contacts</h3>
          </Col>
          {/* <Col md={12} className=" foot_"> */}
          <Col md={12} lg={5} className="foot_">
            <div className="d-flex align-items-start gap-3 foot__">
              <i class="fa-solid fa-location-dot"></i>
              <p>
                Suite #23 Level 12 R K Square Extension Main Shahra-e-Liaquat
                New Challi Karachi -74000 Sindh Pakistan
              </p>
            </div>
            <div className="d-flex align-items-start gap-3 foot__">
              <i class="fa-solid fa-clock"></i>
              <p>
                Office Timings: Mon- Fri (10 a.m-5 p.m) Suite 23, Level 12 R.K.
                Square Extension, Main Shahra-e-Liaquat (New Challi), Karachi –
                74000
              </p>
            </div>

            <ListGroup as="ul">
              <ListGroupItem as="li">
                <Link to="/">
                  <i class="fa-solid fa-phone-volume"></i>+ 92 333 2372582
                </Link>
              </ListGroupItem>
              <ListGroupItem as="li">
                <Link to="/">
                  <i class="fa-solid fa-phone-volume"></i>+92 21 32400326
                </Link>
              </ListGroupItem>
              <ListGroupItem as="li">
                <Link to="/">
                  <i class="fa-solid fa-envelope"></i>
                  info@info@mustafacomputers.com
                </Link>
              </ListGroupItem>
            </ListGroup>
            <ListGroup as="ul" className="footer_list mt-3">
              <ListGroupItem as="li">
                <i className="fa-brands fa-facebook-f"></i>
              </ListGroupItem>
              <ListGroupItem as="li">
                <i class="fa-brands fa-twitter"></i>
              </ListGroupItem>
              <ListGroupItem as="li">
                <i className="fa-brands fa-linkedin"></i>
              </ListGroupItem>
              <ListGroupItem as="li">
                <i class="fa-brands fa-instagram"></i>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={12} lg={7} className="">
            <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              width="100%"
              height="400px"
              src="https://maps.google.com/maps?q=Shahra-e-Liaquat%20New%20Challi%20Karachi%20-74000%20Sindh%20Pakistan&#038;t=m&#038;z=16&#038;output=embed&#038;iwloc=near"
              title="Shahra-e-Liaquat New Challi Karachi -74000 Sindh Pakistan"
              aria-label="Shahra-e-Liaquat New Challi Karachi -74000 Sindh Pakistan"
            ></iframe>
          </Col>
        </Row>
        <Row className="footer_bottom pb-2">
          <Col>
            <p>© Mustafa Computers And Peripherals. All right reserved, 2018-2022</p>
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

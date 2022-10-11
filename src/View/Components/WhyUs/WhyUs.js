import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Card1 from "../../../assets/Images/card1.png";
import Card2 from "../../../assets/Images/card2.png";
import Card3 from "../../../assets/Images/card3.png";
import "bootstrap/dist/css/bootstrap.min.css";

function WhyUs() {
  return (
    <section className="whyus py-5">
      <Container>
        {/* <div className="head text-center"> */}
        <Row className="head text-center">
          <Col md={12}>
            <h2>Why Us?</h2>
            <div className="text d-flex justify-content-center my-5">
              <p className="w-75">
                Few people understand visual technologies – in all its
                complexity – as well as we do. From a single component to the
                end user experience – we have rich practical expertise and deep
                knowledge to provide you best possible solution.
              </p>
            </div>
          </Col>
        </Row>
        {/* </div> */}
        {/* <div className="body"> */}
        <Row className="body">
          <Col md={4}>
            <Card className="text-center border-0">
              <div className="imgg">
                <Card.Img
                  variant="center"
                  className="m-auto"
                  width="100"
                  src={Card1}
                />
              </div>
              <Card.Body>
                <Card.Title className="w-75 m-auto my-4">
                  TEAM OF BUSINESS MINDED ENGINEERS
                </Card.Title>
                <Card.Text className="text-start">
                  Each team member is a professional in a very specific field.
                  Our business value is not a product itself, but the best
                  possible solution for the exact client and his specific
                  situation. We think about ROI of a customer and use our
                  engineering minds to deliver best China market can offer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-0">
              <div className="imgg">
                <Card.Img
                  variant="center"
                  className="m-auto"
                  width="100"
                  src={Card2}
                />
              </div>
              <Card.Body>
                <Card.Title className="w-75 m-auto my-4">
                  TRANSPARENT COOPERATION
                </Card.Title>
                <Card.Text className="text-start">
                  Working with us – is a simple and transparent experience. We
                  are ready to openly introduce and explain choices of each
                  component, solution or design applied in order to guarantee
                  our customer total confidence in the product.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-0">
              <div className="imgg">
                <Card.Img
                  variant="center"
                  className="m-auto"
                  width="100"
                  src={Card3}
                />
              </div>
              <Card.Body>
                <Card.Title className="w-75 m-auto my-4">
                  TAILOR MADE PROJECTS
                </Card.Title>
                <Card.Text className="text-start w-100">
                  One of the main advantages is customizable solutions that we
                  offer. Clients who have specific idea, demand for unique
                  application or a request for product matching requirements of
                  a tender – we are always ready to fully cooperate, advice and
                  consult and eventually come up with positive result.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* </div> */}
      </Container>
    </section>
  );
}

export default WhyUs;

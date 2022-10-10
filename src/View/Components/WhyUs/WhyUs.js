import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
          <Col md={12}></Col>
        </Row>
        {/* </div> */}
      </Container>
    </section>
  );
}

export default WhyUs;

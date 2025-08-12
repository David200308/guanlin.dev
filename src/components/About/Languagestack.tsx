import React from "react";
import { Col, Row } from "react-bootstrap";

const Languagestack: React.FC = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="lang">
        <p style={{ fontSize: "30px" }}>English</p>
        <hr />
        <p style={{ fontSize: "30px" }}>Fluent</p>
      </Col>
      <Col xs={4} md={2} className="lang">
        <p style={{ fontSize: "30px" }}>Chinese</p>
        <hr />
        <p style={{ fontSize: "30px" }}>Native</p>
      </Col>
      <Col xs={4} md={2} className="lang">
        <p style={{ fontSize: "30px" }}>French</p>
        <hr />
        <p style={{ fontSize: "30px" }}>Beginner</p>
      </Col>
    </Row>
  );
};

export default Languagestack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import EduCards from "./EduCards";
import Languagestack from "./Languagestack";
import PolyuLogo from "../../Assets/Works/polyu-logo.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Education Experiences</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EduCards
              imgPath={PolyuLogo}
              eduName="The Hong Kong Polytechnic University"
              location="Hong Kong SAR"
              title="Bachelor of Science (Honours) in Computer Science"
              date="September, 2021 - June, 2025"
              link="https://www.polyu.edu.hk/"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Tech Stacks</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Spoken Languages</strong>
        </h1>
        <Languagestack />

      </Container>
    </Container>
  );
}

export default About;

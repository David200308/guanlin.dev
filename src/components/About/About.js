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
          <strong>Education Experiences</strong>
        </h1>

        <Row className="justify-content-center">
          <Col lg={10} md={11} sm={12} className="edu-card">
            <EduCards
              imgPath={PolyuLogo}
              eduName="The Hong Kong Polytechnic University"
              location="Hong Kong SAR"
              title="Bachelor of Science (Honours) in Computer Science"
              honLevel="Second Class Honours (Upper division)"
              date="September, 2021 - June, 2025"
              link="https://www.polyu.edu.hk/"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong>Tech Stacks</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong>Spoken Languages</strong>
        </h1>
        <Languagestack />

      </Container>
    </Container>
  );
}

export default About;

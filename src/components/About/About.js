import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Languagestack from "./Languagestack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
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

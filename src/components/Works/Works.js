import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkCards";
import Particle from "../Particle";
import OKXLogo from "../../Assets/Works/okx-logo.png";
import MoonlabLogo from "../../Assets/Works/moonlab-logo.png";
import OmniscolLogo from "../../Assets/Works/omniscol-logo.png";

function Works() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Work Experiences</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={OKXLogo}
              companyName="OKX"
              location="Hong Kong SAR"
              title="Software Engineer (On-site)"
              date="July, 2025 - ?"
              ghLink="https://okx.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <WorkCards
              imgPath={MoonlabLogo}
              companyName="Moon Lab Limited"
              location="Hong Kong SAR"
              title="Software Engineer Internship (On-site)"
              date="Jan, 2024 - Dec, 2024"
              ghLink="https://themoonlab.co"
            />
          </Col>

          <Col md={4} className="project-card">
            <WorkCards
              imgPath={OmniscolLogo}
              companyName="Omniscol"
              location="Paris, France"
              title="Information Technology Internship (On-site)"
              date="June, 2023 - July, 2023"
              ghLink="https://omniscol.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Works;

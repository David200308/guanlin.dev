import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkCards";
import Particle from "../Particle";
import OKXLogo from "../../Assets/Works/okx-logo.png";
import MoonlabLogo from "../../Assets/Works/moonlab-logo.png";
import OmniscolLogo from "../../Assets/Works/omniscol-logo.png";

const Works: React.FC = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong>Work Experiences</strong>
        </h1>

        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} className="project-card">
            <WorkCards
              imgPath={OKXLogo}
              companyName="OKX"
              location="Hong Kong SAR"
              title="Software Engineer (On-site)"
              date="July, 2025 - Current"
              link="https://okx.com"
            />
          </Col>

          <Col lg={8} md={10} sm={12} className="project-card">
            <WorkCards
              imgPath={MoonlabLogo}
              companyName="Moon Lab Limited"
              location="Hong Kong SAR"
              title="Software Engineer Internship (On-site)"
              date="Jan, 2024 - Dec, 2024"
              link="https://themoonlab.co"
            />
          </Col>

          <Col lg={8} md={10} sm={12} className="project-card">
            <WorkCards
              imgPath={OmniscolLogo}
              companyName="Omniscol"
              location="Paris, France"
              title="Information Technology Internship (On-site)"
              date="June, 2023 - July, 2023"
              link="https://omniscol.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Works;

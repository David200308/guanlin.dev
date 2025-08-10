import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectWalletImage from "../../Assets/Projects/project-wallet_platform.png";
import ProjectAuthSystemImage from "../../Assets/Projects/project-auth_system.png";
import ProjectBudgetAPPImage from "../../Assets/Projects/project-budget_app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectWalletImage}
              isBlog={false}
              title="Central Custody Blockchain Wallet Platform"
              description=""
              ghLink="https://github.com/David200308/Central-Custody-Blockchain-Wallet-Platform"
              // demoLink="https://wallet.skyproton.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectAuthSystemImage}
              isBlog={false}
              title="Authentication System"
              description="Login with PassKey, Password and TOTP, Push Notification Login, QR Code Login, Google, and Facebook OAuth2.0."
              ghLink="https://github.com/David200308/Authentication-System"
              demoLink="https://auth.skyproton.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectBudgetAPPImage}
              isBlog={false}
              title="Budget iOS APP"
              description="Making a Budget APP by Swift (APP) & SQLite (Database) that can record transactions offline for the user."
              ghLink="https://github.com/David200308/Budget-iOS-APP"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

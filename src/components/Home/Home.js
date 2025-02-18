import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Type from "./Type";
import {
} from "react-icons/si";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Guanlin (David) Jiang</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ padding: 50, textAlign: "left" }}>
                <h3 style={{ paddingBottom: 20 }}>
                  Full Stack Development
                </h3>
                <h3 style={{ paddingBottom: 20 }}>
                  Cloud Computing
                </h3>
                <h3 style={{ paddingBottom: 20 }}>
                  Blockchain Tech
                </h3>
                <h3 style={{ paddingBottom: 20 }}>
                  Mobile Development
                </h3>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

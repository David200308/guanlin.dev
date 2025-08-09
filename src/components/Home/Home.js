import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Particle />
      </div>
      
      <Container fluid className="home-section" style={{ 
        position: "relative", 
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}>
        <Container className="home-content">
          <Row className="align-items-center">
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
                style={{ 
                  maxHeight: "450px",
                  maxWidth: "450px",
                  borderRadius: "50%",
                  border: "6px solid #f5f5f5",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  marginTop: "50px"
                }}
              />
              <div style={{ paddingTop: 50, textAlign: "center" }}>
                <ul className="footer-icons">
                  <li className="social-icons">
                    <a
                      href="https://github.com/David200308"
                      style={{ color: "#333" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub style={{ width: "40px", height: "40px" }} />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/DavidGJiang"
                      style={{ color: "#333" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineTwitter style={{ width: "40px", height: "40px" }} />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/guanlin-jiang/"
                      style={{ color: "#333" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn style={{ width: "40px", height: "40px" }} />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/DavidGJiang"
                      style={{ color: "#333" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram style={{ width: "40px", height: "40px" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

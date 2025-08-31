import React, { useState, useEffect } from "react";
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

const Home: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    const handleZoom = () => {
      const zoom = window.devicePixelRatio || 1;
      setZoomLevel(zoom);
    };

    window.addEventListener('resize', handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener('resize', handleZoom);
    };
  }, []);

  const getResponsiveDimensions = (): React.CSSProperties => {
    const baseSize = 450;
    const responsiveSize = Math.max(baseSize * (1 / zoomLevel), 200);
    
    return {
      maxHeight: `${responsiveSize}px`,
      maxWidth: `${responsiveSize}px`,
      transform: `scale(${Math.min(zoomLevel, 2)})`,
      transition: 'all 0.3s ease-in-out'
    };
  };

  const getSocialIconsSpacing = (): React.CSSProperties => {
    const baseSize = 450;
    const responsiveSize = Math.max(baseSize * (1 / zoomLevel), 200);
    const dynamicPadding = Math.max(50, responsiveSize * 0.15);
        
    return {
      paddingTop: `${dynamicPadding}px`,
      marginTop: `${Math.max(40, responsiveSize * 0.05) + 40}px`
    };
  };

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
                  Blockchain Technology
                </h3>
                <h3 style={{ paddingBottom: 20 }}>
                  Cloud Computing
                </h3>
                <h3 style={{ paddingBottom: 20 }}>
                  iOS Development
                </h3>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ 
                  ...getResponsiveDimensions(),
                  borderRadius: "50%",
                  border: "6px solid #f5f5f5",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  marginTop: "50px"
                }}
              />
              <div style={{ ...getSocialIconsSpacing(), textAlign: "center" }}>
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
                  <li className="social-icons">
                    <a
                      href="https://www.xiaohongshu.com/user/profile/60d67c2c000000000101c5b9" 
                      style={{ color: "#333" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        src="data:image/webp;base64,UklGRiIEAABXRUJQVlA4TBUEAAAvK8FKECcQEQKBFG52EQP12nrCSJJQEQDd4wAYjwLwjAkAY+WfFCBhUNXZX9sR/Z8A+PH/j/9//P8/H+Pex5l24XRfwqcK9/1Egftpupv78+AnEVkInwl9FFngP4oiwI+ChTBzfC64xaKAeoUHu0bhsWn/loW/zLRWNoKZyUkKMzMtVQSv1ThhL3LztdItwOWYsVNaaaHIQjAguUbkLlpAFjA1cs+vkwXeBMaq9LZ1igBtIEVah4VgAzsAuNeLArLCAwALl8n2kA1FgFawE6Vl2KCXiFaJEjDDi7b1yI5NhKtcAm9HEsEqRYB2sISWYSEY4gS4SpQ4i34BAISv/rivvutkyS/R37MWnc3W9RzCv/M8zz8O6sz916jI/a1TJEKE7iFIMDAKCOook18zUYeHwiRBBZchcQgtkwWvYTgq6LIpx7AyU2qVIfhfAagCDwXD3CxxCL01buQh3p57gltThuACaR5YCezhqdww+gTuEZtlaVzRXCPQnjAXfhSXJo4Ay2gaKDqaKOryqDjXqxF1/rlTKOCzeQvSuX+tBXE/z/OU4GOBp004U9a1JWAH867bZosCMoWpcczlRVngbWGc5hhUBGgMO4X/GDYAyHNtIhaCNWmWOCYKyBx+yV6TZYG3ZwO45iJJEaA9aZIwhoVgDzsRzhUFZNELylxJkAXeIr9OEaBF2xzwfkjkpgosBIsS3FPcPe7FDyVLaK+dXTBVkbTRFgaezHVYD8/AV/+35Ev5+98CRRd19JQwCBKo46C0lrcAiiTMcQmwlXVowjGGpio6MCFI4myvFqvJBhizPZFVQefNyQL/xCHYGlGH5pTZ0vvBJ4IqqAjMkU7CrgL7boF7AiTQLBpvzyWAR+4etQ4N2nP00iS+BUUB9oQePXP1sAP/RGQQ3J3tmaMHMxpxdfwc9D6ODj4TOv59hI57Bjr4PqADD93vpzToqatB8EZywz91yI4/7g0cDXwqNHyrMJ+72FVh7xbJ3scFgo6HQANbrMYq86N+jiiDm5kTCOOgu4Jm1EFdDLgUFzNTFb7qe9DFzDSKGrzO7719suJgZl9lVosiM/tWUfkqLnTxwAQAgZmxOh4BZsZRWOWFjhEEAMBMUAdVkhVm12I11GWhOKzw1oBbQ7KDCZpRRQ1eCEZsVWZsXY+EXlb5Ki51D/DVQdA+NF4GBVtFhVVe6hqAVfCdoEHF0WE11GWpYwA0XQee6UYVGRB01BLesgRj85jIS8Gt8qpLtg0qKrTgUqHqkOEgHpMXyxoCdRARjI06qMtihwZ1cEtek1CDFwsKgoGXgGBwUfkqrga3KLkRRy+5WbDKy12S5GBk6CQHo+OtgbosdwhOB2P35hc8+XsXfzf2551g73+Lwt7+dvDj/x////j/fyQCAA==" 
                        alt="Rednote/Xiaohongshu"
                        style={{ height: "70px" }}
                      />
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
};

export default Home;

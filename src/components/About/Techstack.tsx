import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
  DiGoogleCloudPlatform,
  DiAws,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiRemix,
  SiSolid,
  SiNestjs,
  SiExpress,
  SiSpringboot,
  SiFastify,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiVercel,
  SiElasticsearch,
  SiApachehadoop,
  SiOracle,
  SiAlibabacloud,
} from "react-icons/si";
import { TbBrandGolang, TbBrandTypescript } from "react-icons/tb";

const Techstack: React.FC = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "30px" }}>
        Programming Languages
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTypescript />
        <hr />
        <p style={{ fontSize: "30px" }}>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <hr />
        <p style={{ fontSize: "30px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <hr />
        <p style={{ fontSize: "30px" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <hr />
        <p style={{ fontSize: "30px" }}>Golang</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <hr />
        <p style={{ fontSize: "30px" }}>Python</p>
      </Col>

      <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "30px" }}>
        Backend Frameworks
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <hr />
        <p style={{ fontSize: "30px" }}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <hr />
        <p style={{ fontSize: "30px" }}>NestJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <hr />
        <p style={{ fontSize: "30px" }}>ExpressJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastify />
        <hr />
        <p style={{ fontSize: "30px" }}>Fastify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <hr />
        <p style={{ fontSize: "30px" }}>Flask</p>
      </Col>

      <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "30px" }}>
        Database & Data Streaming
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <hr />
        <p style={{ fontSize: "30px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <hr />
        <p style={{ fontSize: "30px" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <hr />
        <p style={{ fontSize: "30px" }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <hr />
        <p style={{ fontSize: "30px" }}>Firebase FireStore</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <hr />
        <p style={{ fontSize: "30px" }}>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
        <hr />
        <p style={{ fontSize: "30px" }}>ElasticSearch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
        <hr />
        <p style={{ fontSize: "30px" }}>Hadoop & HBase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <hr />
        <p style={{ fontSize: "30px" }}>Oracle Database</p>
      </Col>

      <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "30px" }}>
        Frontend Frameworks
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <hr />
        <p style={{ fontSize: "30px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRemix />
        <hr />
        <p style={{ fontSize: "30px" }}>Remix</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolid />
        <hr />
        <p style={{ fontSize: "30px" }}>Solid</p>
      </Col>

      <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "30px" }}>
        Cloud Services
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
        <hr />
        <p style={{ fontSize: "30px" }}>Google Cloud Platform</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <hr />
        <p style={{ fontSize: "30px" }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <hr />
        <p style={{ fontSize: "30px" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAlibabacloud />
        <hr />
        <p style={{ fontSize: "30px" }}>Alibaba Cloud</p>
      </Col>
    </Row>
  );
};

export default Techstack;

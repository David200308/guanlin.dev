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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h2 style={{ 
        textAlign: "center", 
        margin: "20px 0", 
        fontSize: "clamp(24px, 5vw, 30px)" 
      }}>
        Programming Languages
      </h2>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <TbBrandTypescript />
        <hr />
        <p>Typescript</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <hr />
        <p>JavaScript</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <DiJava />
        <hr />
        <p>Java</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <hr />
        <p>Golang</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <DiPython />
        <hr />
        <p>Python</p>
      </Col>

      <h2 style={{ 
        textAlign: "center", 
        margin: "20px 0", 
        fontSize: "clamp(24px, 5vw, 30px)" 
      }}>
        Backend Frameworks
      </h2>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiSpringboot />
        <hr />
        <p>Spring Boot</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiNestjs />
        <hr />
        <p>NestJS</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiExpress />
        <hr />
        <p>ExpressJS</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiFastify />
        <hr />
        <p>Fastify</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiFlask />
        <hr />
        <p>Flask</p>
      </Col>

      <h2 style={{ 
        textAlign: "center", 
        margin: "20px 0", 
        fontSize: "clamp(24px, 5vw, 30px)" 
      }}>
        Database & Data Streaming
      </h2>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiMysql />
        <hr />
        <p>MySQL</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiMongodb />
        <hr />
        <p>MongoDB</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiPostgresql />
        <hr />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiFirebase />
        <hr />
        <p>Firebase FireStore</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiRedis />
        <hr />
        <p>Redis</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiElasticsearch />
        <hr />
        <p>ElasticSearch</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiApachehadoop />
        <hr />
        <p>Hadoop & HBase</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiOracle />
        <hr />
        <p>Oracle Database</p>
      </Col>

      <h2 style={{ 
        textAlign: "center", 
        margin: "20px 0", 
        fontSize: "clamp(24px, 5vw, 30px)" 
      }}>
        Frontend Frameworks
      </h2>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <DiReact />
        <hr />
        <p>React</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiRemix />
        <hr />
        <p>Remix</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiSolid />
        <hr />
        <p>Solid</p>
      </Col>

      <h2 style={{ 
        textAlign: "center", 
        margin: "20px 0", 
        fontSize: "clamp(24px, 5vw, 30px)" 
      }}>
        Cloud Services
      </h2>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
        <hr />
        <p>Google Cloud Platform</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <DiAws />
        <hr />
        <p>AWS</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiVercel />
        <hr />
        <p>Vercel</p>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiAlibabacloud />
        <hr />
        <p>Alibaba Cloud</p>
      </Col>
    </Row>
  );
}

export default Techstack;

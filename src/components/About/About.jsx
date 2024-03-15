import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./TechStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/About/about.png";
import Toolstack from "./ToolStack";
import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "1.7em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
            <Col>
                <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
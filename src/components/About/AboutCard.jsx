import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./about.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", fontSize: "0.7em" }}>
            Hi Everyone, I am <span className="purple">Atharva Kadam </span>
            <br />
            I am currently employed as a Software Developer at Introhive.
            <br />
            I am currently pursuing my Bachelors in Computer Science from the University of New Brunswick.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="about-activity">
            <ImPointRight /> Watching and Playing Soccer
          </ul>
          <ul className="about-activity">
            <ImPointRight /> Reading Tech Blogs
          </ul>
          <ul className="about-activity">
            <ImPointRight /> Playing Piano
          </ul>
          <br></br>
          <h3 style={{ color: "rgb(155 126 172)", textAlign: "left" }}>
            "Great things start with Imagination!"{" "}
          </h3>
          <footer className="blockquote-footer">- Atharva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
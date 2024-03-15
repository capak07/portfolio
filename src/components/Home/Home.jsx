import React from 'react';
import './home.css';
import Type from './Type';
import {Container,Row, Col} from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/Home/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
    return (
        <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="font-face">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Atharva Kadam</strong>
                  <div style={{color: "whitesmoke" }}>
                  <Type />
                </div>
                </h1>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                <Col md={8} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }} className='font-face'>
                    LET ME <span className="purple"> INTRODUCE </span> MYSELF
                    </h1>
                    <p className="home-about-body">
                    I fell in love with programming and I have at least learnt
                    something, I think… 🤷‍♂️
                    <br />
                    <br />I am fluent in classics like
                    <i>
                        <b className="purple"> Ruby, Java, Python and little bit of C. </b>
                    </i>
                    <br />
                    <br />
                    My field of Interest's are building new &nbsp;
                    <i>
                        <b className="purple">Web Technologies and Products </b> and
                        also in areas related to{" "}
                        <b className="purple">
                        Artificial Intelligence and Machine Learning
                        </b>
                    </i>
                    <br />
                    <br />
                    Whenever possible, I also apply my passion for developing products
                    with <b className="purple">Node.js</b> and
                    <i>
                        <b className="purple">
                        {" "}
                        Modern Javascript Library and Frameworks
                        </b>
                    </i>
                    &nbsp; like
                    <i>
                        <b className="purple"> React.js and Next.js</b>
                    </i>
                    </p>
                </Col>
                <Col md={4} className="myAvtar">
                    <Tilt>
                    <img src={myImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
                </Row>
                <Row>
                <Col md={12} className="home-about-social">
                    <h1>FIND ME ON</h1>
                    <p>
                    Feel free to <span className="purple">connect </span>with me
                    </p>
                    <div className="home-about-social-links">
                        <div className="social-icons">
                            <a
                                href="https://github.com/capak07"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                style={{ color: "whitesmoke" }}
                                >
                                <AiFillGithub />
                                </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://github.com/capak07"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                style={{ color: "whitesmoke" }}
                                >
                                <AiOutlineTwitter />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="www.linkedin.com/in/atharva-kadam-0a6923218"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                style={{ color: "whitesmoke" }}
                                >
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.instagram.com/atharva.k7/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                                style={{ color: "whitesmoke" }}
                                >
                                <AiFillInstagram />
                            </a>
                        </div>
                    </div>
                </Col>
                </Row>
            </Container>
        </Container>
      </section>
    )
}

export default Home;
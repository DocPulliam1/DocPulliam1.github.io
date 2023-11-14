import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Doc Pulliam </span>
            from <span className="purple"> Mount Vernon, New York.</span>
            <br /> I am a self motivated student of Technology.
            <br />
            I've independently conceptualized, designed, and developed several
            iOS applications, gaining valuable experience in the entire app
            development lifecycle.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Write Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Take pictures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Belief in oneself is the foundation for everything great "{" "}
          </p>
          <footer className="blockquote-footer">Jay-Z</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

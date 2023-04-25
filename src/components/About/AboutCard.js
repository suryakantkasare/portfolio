import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> </span>Surykant Kasare
            from <span className="purple"> Maharashtra, India.</span>
            <br />I am a junior pursuing  Bachlaer Degree in Information & Technology in SGGSIE&T, Nanded
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Sudoku
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#5199e3" }}>
            "Invest Your 1 % A Day To Making World Beautiful!"{" "}
          </p>
          <footer className="blockquote-footer">Surykant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

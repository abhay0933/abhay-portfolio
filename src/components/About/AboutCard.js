import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhay Chauhan </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I am a fresher actively seeking opportunities as a frontend developer.
            <br />
            I completed my Bachelor's degree in Journalism before enrolling in a MERN stack diploma course at Geekester.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's not about ideas. It's about making ideas happen!"{" "}
          </p>
          <footer className="blockquote-footer">Abhay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

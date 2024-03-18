import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anas Khan </span>
             <span className="purple"> </span>
            <br />
            I am currently employed looking for opportunities in developing AI solutions.
            <br />
            I have completed Bachelor's in Artificial Intelligence and Data Science
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading research papers
            </li>
            <li className="about-activity">
              <ImPointRight /> Scouting upcoming AI technologies and startups
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading personal development books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The curse of power at the cost of peace"{" "}
          </p>
          <footer className="blockquote-footer">Anas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

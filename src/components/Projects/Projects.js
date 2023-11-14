import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tipsy from "../../Assets/Projects/tipsy.png";
import bytecoin from "../../Assets/Projects/bytecoin.png";
import clima from "../../Assets/Projects/clima.png";
import hacker from "../../Assets/Projects/hacker.png";
import mychats from "../../Assets/Projects/mychats.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mychats}
              isBlog={false}
              title="MyChats"
              description="A chat application with built in authentication. You can register and login with the Firebase Firestore database with featurees added with the CocoaPods and Swift Package Manager."
              ghLink="https://github.com/DocPulliam1/MyChats"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clima}
              isBlog={false}
              title="Clima"
              description="A weather application that fetches live weather from your location and others from API that is light and dark mode enabled."
              ghLink="https://github.com/DocPulliam1/Clima"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hacker}
              isBlog={false}
              title="Hacker News"
              description="A SwiftUI application that fetches the newst Hacker news from API. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bytecoin}
              isBlog={false}
              title="ByteCoin"
              description="A Bitcoin price tracker app that gives the latest Bitcoin prices in all popular traded currencies."
              ghLink="https://github.com/DocPulliam1/ByteCoin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipsy}
              isBlog={false}
              title="Tipsy"
              description="A beautiful bill splitting, tip calculating app. Who wants to work out $123.55 split between 4 friends with a 18 percent tip. Tipsy will take care of all of your calculations for you!!"
              ghLink="https://github.com/DocPulliam1/Tipsy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

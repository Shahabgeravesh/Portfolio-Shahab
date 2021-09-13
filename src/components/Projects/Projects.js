import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//These are the relative path to the image of the projects
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (

    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <h1>This page is still under development. </h1>
          <h2>Projects will be added shortly. Thank you for your patience</h2>
          My Recent <strong className="purple">Projects </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image}
              isBlog={false}
              title="Note Taker"
              description="Full-stack application designed for note taking purposes using node.js and express.js. All the information is stored within node.js so we can have a functional server to save data and make changes. Node.js creates html routes as well as api routes."
              link="https://github.com/Shahabgeravesh/Note-Taker-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image}
              isBlog={false}
              title="Task-Manager"
              description="A Simple app that helps the user to keep track of to-do list. User is able to enter a task name and pick a task type then keep track of it until completion."
              link="https://github.com/Shahabgeravesh/Task-Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image}
              isBlog={false}
              title="Title"
              description="Description"
              link="Link to GitHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image}
              isBlog={false}
              title="Title"
              description="Description"
              link="Link to GitHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image}
              isBlog={false}
              title="Title"
              description="Description"
              link="Link to GitHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image}
              isBlog={false}
              title="Title"
              description="Description"
              link="Link to GitHub"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

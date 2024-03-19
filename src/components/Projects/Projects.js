import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trello from "../../Assets/Projects/trello.jpg";
import codepen from "../../Assets/Projects/codepen.jpg";
import githubfollower from "../../Assets/Projects/githubfollowers.jpg";
import weather from "../../Assets/Projects/weather.jpg";
import pathlab from "../../Assets/Projects/Pathlab.jpg";
import recipefiner from "../../Assets/Projects/recipefinder.jpg";
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
              imgPath={trello}
              isBlog={false}
              title="Trello"
              description="I ensured that the Trello clone I created with HTML, CSS, and JavaScript is responsive across various devices and screen sizes."
              ghLink="https://github.com/Ankit64s/team3MCT4/tree/main/trelloCloneByAbhay"
              demoLink="https://geekathonteam3.netlify.app/trelloclonebyabhay/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codepen}
              isBlog={false}
              title="CodePen Clone"
              description="I've crafted a CodePen clone using React, Firebase, and routing functionalities. It provides a platform similar to CodePen where users can write and share code snippets seamlessly."
              ghLink="https://github.com/abhay0933/CodePenClone"
              demoLink="https://code-pen-clone-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Creating a weather application with React, I integrated APIs to fetch real-time weather data, offering users immediate access to accurate weather forecasts."
              ghLink="https://github.com/abhay0933/Weather-app-react"
              demoLink="https://weather-app-react-nine-tau.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubfollower}
              isBlog={false}
              title="Github Follower"
              description="I created a GitHub follower app, leveraging an API to retrieve the followers list for a specified username. Users input a username, and the app displays the corresponding follower list. This streamlined tool enhances user experience by facilitating efficient navigation through GitHub profiles."
              ghLink="https://github.com/abhay0933/React-day14"
              demoLink="https://react-day14.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathlab}
              isBlog={false}
              title="Pathlab Clone"
              description="
              I designed a user interface (UI) for a pathology laboratory using HTML and CSS. This UI facilitates seamless navigation and interaction with the laboratory's services, enhancing user experience. It streamlines the process of accessing pathology services and promotes efficiency in healthcare management"
              ghLink="https://github.com/jaitensahu/Project-Dr.PathLab"
              demoLink="https://jaitensahu.github.io/Project-Dr.PathLab/Patients/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipefiner}
              isBlog={false}
              title="Recipe Finder"
              description="I developed a recipe finder app using React, integrating an API to retrieve diverse recipes based on user preferences. This streamlined tool enhances culinary exploration by offering a wide array of recipes to suit various tastes and dietary requirements, promoting a delightful cooking experience for users."
              ghLink="https://github.com/abhay0933/Recipe-Finder"
              demoLink="https://recipe-finder-phi-eosin.vercel.app/"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

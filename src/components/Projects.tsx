import React from "react";
import styled from "styled-components";
import { data } from "../data";

const ProjectsContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: white;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const Projects: React.FC = () => (
  <ProjectsContainer>
    <h2>Projects</h2>
    {data.projects.map((project, index) => (
      <div key={index}>
        <h3>{project.title}</h3>
        <p>{project.date}</p>
        <ul>
          {project.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </ProjectsContainer>
);

export default Projects;

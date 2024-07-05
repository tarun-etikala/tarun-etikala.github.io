import React from "react";
import styled from "styled-components";
import { data } from "../data";

const ExperienceContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: white;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const Experience: React.FC = () => (
  <ExperienceContainer>
    <h2>Work Experience</h2>
    {data.workExperience.map((work, index) => (
      <div key={index}>
        <h3>{work.company}</h3>
        <p>{work.position}</p>
        <p>{work.date}</p>
        <ul>
          {work.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    ))}
  </ExperienceContainer>
);

export default Experience;

import React from "react";
import styled from "styled-components";
import { data } from "../data";

const EducationContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: white;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  width: 100%;
`;

const Education: React.FC = () => (
  <EducationContainer>
    <h2>Education</h2>
    {data.education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.institution}</h3>
        <p>{edu.degree}</p>
        <p>{edu.date}</p>
        <p>GPA: {edu.gpa}</p>
        <ul>
          {edu.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    ))}
  </EducationContainer>
);

export default Education;

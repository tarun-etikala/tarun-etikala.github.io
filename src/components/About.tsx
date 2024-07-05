import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: white;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
const resumeURL =
  "https://drive.google.com/file/d/19vrZNau_8c1S-cEDn9BWbkmqqtfdzVyy/view?usp=sharing";

const About: React.FC = () => (
  <AboutContainer>
    <h2>About Me</h2>
    <p>
      I am a Master of Science in Data Science student at Northeastern
      University with a strong background in software development and data
      analysis. I am passionate about leveraging machine learning and data
      science to solve real-world problems.
    </p>
    <DownloadButton
      href={resumeURL}
      target="_blank"
      rel="noopener noreferrer"
      download
    >
      Download Resume
    </DownloadButton>
  </AboutContainer>
);

export default About;

import React from "react";
import styled from "styled-components";
import dp from "../assets/dp.png";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";

const AboutContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: white;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const resumeURL =
  "https://drive.google.com/file/d/19vrZNau_8c1S-cEDn9BWbkmqqtfdzVyy/view?usp=sharing";

const About: React.FC = () => (
  <AboutContainer id="about">
    <h2>About Me</h2>
    <Avatar alt="Remy Sharp" src={dp} sx={{ width: 256, height: 256 }} />
    <p>
      I am a Master of Science in Data Science student at Northeastern
      University with a strong background in software development and data
      analysis. I am passionate about leveraging machine learning and data
      science to solve real-world problems.
    </p>

    <Button
      href={resumeURL}
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
    >
      Download Resume
    </Button>
  </AboutContainer>
);

export default About;

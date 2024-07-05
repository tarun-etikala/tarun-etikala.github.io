import React from "react";
import styled from "styled-components";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: white;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const Home: React.FC = () => (
  <HomeContainer>
    <About />
    <Education />
    <Experience />
    <Projects />
  </HomeContainer>
);

export default Home;

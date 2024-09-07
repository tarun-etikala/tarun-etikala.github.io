import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: white;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const Skills: React.FC = () => (
  <SkillsContainer id="skills">
    <h2>Skills</h2>
  </SkillsContainer>
);

export default Skills;

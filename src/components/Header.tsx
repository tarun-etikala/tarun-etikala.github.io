import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282828de;
  padding: ${({ theme }) => theme.spacing.medium};
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  z-index: 9999;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <NavLink to="home" smooth={true} offset={-40} duration={500}>
      Home
    </NavLink>
    <NavLink to="experience" smooth={true} offset={-40} duration={500}>
      Experience
    </NavLink>
    <NavLink to="projects" smooth={true} offset={-40} duration={500}>
      Projects
    </NavLink>
    <NavLink to="skills" smooth={true} offset={-40} duration={500}>
      Skills
    </NavLink>
    <NavLink to="education" smooth={true} offset={-40} duration={500}>
      Education
    </NavLink>
  </HeaderContainer>
);

export default Header;

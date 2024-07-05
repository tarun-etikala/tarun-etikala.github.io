import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #5f5f65e0;
  padding: ${({ theme }) => theme.spacing.medium};
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/education">Education</NavLink>
    <NavLink to="/experience">Experience</NavLink>
    <NavLink to="/projects">Projects</NavLink>
  </HeaderContainer>
);

export default Header;

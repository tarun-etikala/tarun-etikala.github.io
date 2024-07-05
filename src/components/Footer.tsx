import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000000;
  padding: ${({ theme }) => theme.spacing.small};
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <p>© 2024 My Portfolio</p>
  </FooterContainer>
);

export default Footer;

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000000;
  padding: ${({ theme }) => theme.spacing.small};
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 1.5rem;
  bottom: 0;
`;
const FooterText = styled.p`
  margin: 0;
  line-height: 1.5rem;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterText>© 2024 My Portfolio</FooterText>
  </FooterContainer>
);

export default Footer;

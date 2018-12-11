import React from 'react';
import styled from 'styled-components';
import { blueGradiant } from 'components/theme/DeepCast/gradiants';
import { Navbar } from 'reactstrap';

const FooterBar = styled(Navbar)`
  background: ${blueGradiant};
  color: white;
`;

export const Footer = ({ children }) => (
  <FooterBar color="dark" dark expand="md" className="fixed-bottom footer">
    {children}
  </FooterBar>
);

export default Footer;

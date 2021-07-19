import React from 'react';
import styled from 'styled-components';
import { About } from '../About';
import { Contact } from '../Contact';
import { Home } from './../Home';

const StyledContent = styled.section`
  background: #999;
  color: ${({ theme }) => theme.textPrimary};
`;


export const Content: React.FC = (): JSX.Element => {
  return (
    <StyledContent>
      <Home />
      <About />
      <Contact />
    </StyledContent>
  );
};

import React from 'react';
import styled from 'styled-components';
import { About } from '../About';
import { Contact } from '../Contact';
import { Work } from '../Work';
import { Home } from './../Home';

const StyledContent = styled.section`
  background: white;
  color: ${({ theme }) => theme.textPrimary};
`;


export const Content: React.FC = (): JSX.Element => {
  return (
    <StyledContent>
      <Home />
      <About />
      <Work />
      <Contact />
    </StyledContent>
  );
};

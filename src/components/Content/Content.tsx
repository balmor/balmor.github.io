import React from 'react';
import { StyledContent } from '.';
import { About } from '../About';
import { Contact } from '../Contact';
import { Work } from '../Work';
import { Home } from './../Home';

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

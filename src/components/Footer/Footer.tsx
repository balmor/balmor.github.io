import React from 'react';

import { StyledContainer } from '../StyledContainer';
import { FooterContent } from '../FooterContent';
import { SocialBlock } from '../SocialBlock';
import { StyledFooter } from '.';

export const Footer: React.FC = (): JSX.Element => (
  <StyledFooter>
    <StyledContainer>
      <SocialBlock />
      <FooterContent />
    </StyledContainer>
  </StyledFooter>
);

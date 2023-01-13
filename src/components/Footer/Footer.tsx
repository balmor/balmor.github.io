import React from 'react';
import styled from 'styled-components';

import { StyledContainer } from '../StyledContainer';
import { FooterContent } from '../FooterContent';
import { SocialBlock } from '../SocialBlock';


const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.neutral};
  border-top: 2rem solid #7e7e7e;
  color: ${({ theme }) => theme.textSecondary};
`;

export const Footer: React.FC = (): JSX.Element => (
  <StyledFooter>
    <StyledContainer>
      <SocialBlock />
      <FooterContent />
    </StyledContainer>
  </StyledFooter>
);

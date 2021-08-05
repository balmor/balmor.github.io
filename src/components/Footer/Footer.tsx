import React from 'react';
import styled from 'styled-components';

import { StyledContainer } from '../StyledContainer';
import { FooterContent } from '../FooterContent';
import { SocialBlock } from '../SocialBlock';


const StyledFooter = styled.footer`
  background: #eef2f4;
  border-top: 2rem solid #7e7e7e;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Footer: React.FC = (): JSX.Element => (
  <StyledFooter>
    <StyledContainer>
      <SocialBlock />
      <FooterContent />
    </StyledContainer>
  </StyledFooter>
);

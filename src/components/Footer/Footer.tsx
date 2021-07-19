import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { StyledContainer } from '../StyledContainer';
import { FooterContent } from '../FooterContent';
import { SocialBlock } from '../SocialBlock';


const StyledFooter = styled.footer`
  background: #eef2f4;
  border-top: 2rem solid #7e7e7e;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Footer: React.FC = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const { i18n } = useTranslation('home');

  return (
    <StyledFooter>
      <StyledContainer>
        <SocialBlock />
        <FooterContent />
      </StyledContainer>
    </StyledFooter>
  );
};

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { HeaderContainer } from '../StyledContainer';
import { Logo } from '../Logo'
import { Title } from '../Title'
import { Navigation } from '../Navigation/Navigation';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher';
import { StyledTheme } from '../../theme/_types';
import breakpoint from 'styled-components-breakpoint';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 5;
`;

const StyledLogoText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const StyledSwitcher = styled.div`
  margin: 0 1rem;

  ${breakpoint('mobile', 'tablet')`
    align-self: normal;
  `}
`;

export const Header: React.FC = (): JSX.Element => {
  const themeContext = useContext<StyledTheme>(ThemeContext);

  return (
    <StyledHeader>
      <HeaderContainer>
        <StyledLogoText>
          <Logo size="medium" color="blue" background={themeContext.headerBg} />
          <Title subtitle="frontend developer" />
        </StyledLogoText>
        <Navigation />
        <StyledSwitcher>
          <LangSwitcher />
          <ThemeSwitcher />
        </StyledSwitcher>
      </HeaderContainer>
    </StyledHeader>
  );
};

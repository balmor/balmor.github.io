import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HeaderContainer } from '../StyledContainer';
import { Logo } from '../Logo'
import { Title } from '../Title'
import { Navigation } from '../Navigation/Navigation';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher';
import { StyledTheme } from '../../theme/_types';
import { StyledHeader, StyledLogoText, StyledSwitcher } from './Header.styled';

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

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Copyright } from '../Copyright';
import { Logo } from '../Logo';

import { StyledTheme } from '../../theme/_types';
import { FooterNavigation, StyledContent, StyledLogoText, StyledTitle } from '.';

export const FooterContent: React.FC = (): JSX.Element => {
  const themeContext = useContext<StyledTheme>(ThemeContext);

  return (
    <StyledContent>
      <StyledLogoText>
        <Logo size="small" color="gray" background={themeContext.neutral}/>
        <div>
          <StyledTitle />
          <FooterNavigation />
        </div>
      </StyledLogoText>
      <Copyright />
    </StyledContent>
  );
};

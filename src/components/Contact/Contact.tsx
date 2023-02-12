import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledContact, StyledContactContent } from '.';
import { StyledTheme } from '../../theme/_types';
import { FormContact } from '../FormContact';
import { Heading } from '../Heading';
import { QuickConnect } from '../QuickConnect';
import { StyledContainer } from '../StyledContainer';
import { Translate } from '../Translate/Translate';

export const Contact: React.FC = (): JSX.Element => {
  const themeContext = useContext<StyledTheme>(ThemeContext);
  return (
    <StyledContact className="contact">
      <StyledContainer>
        <Heading color={themeContext.textSecondary}>
          <Translate i18nKey="getInTouch" />
        </Heading>
        <p>
          <Translate i18nKey='contactDesc' />
        </p>
        <StyledContactContent>
          <FormContact />
          <QuickConnect />
        </StyledContactContent>
      </StyledContainer>
    </StyledContact>
  );
};

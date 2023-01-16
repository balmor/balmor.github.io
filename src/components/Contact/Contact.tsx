import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { StyledTheme } from '../../theme/_types';
import { FormContact } from '../FormContact';
import { Heading } from '../Heading';
import { QuickConnect } from '../QuickConnect';
import { StyledContainer } from '../StyledContainer';
import { Translate } from '../Translate/Translate';

export const StyledContactH2 = styled.h2`
  color: #677072;
  font-size: 1.6rem;
`;

const StyledContactContent = styled.section`
  display: flex;

  ${breakpoint('mobile', 'tablet')`
    flex-direction: column;
    align-items: center;
  `}
`;

const StyledContact = styled.section`
  background: ${({ theme }) => theme.headerBg};
  height: 70rem;

  ${breakpoint('mobile', 'tablet')`
    height: auto;
  `}
`;

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

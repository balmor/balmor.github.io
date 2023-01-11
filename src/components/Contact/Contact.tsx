import React from 'react';
import styled from 'styled-components';
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
`;

const StyledContact = styled.section`
  background: ${({ theme }) => theme.headerBg};
  height: 700px;
`;

export const Contact: React.FC = (): JSX.Element => {
  return (
    <StyledContact className="contact">
      <StyledContainer>
        <Heading>
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

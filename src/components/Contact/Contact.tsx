import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Translate } from '../Translate/Translate';

const StyledContact = styled.section`
  background: ${({ theme }) => theme.headerBg};
  height: 700px;
`;

export const Contact: React.FC = (): JSX.Element => {
  return (
    <StyledContact className="contact">
      <StyledContainer>
        <Heading><Translate i18nKey="getInTouch" /></Heading>
      </StyledContainer>
    </StyledContact>
  );
};

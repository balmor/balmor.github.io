import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Translate } from '../Translate';
import { lighten } from 'polished';

const StyledWork = styled.section`
  height: 400px;
  background: ${({ theme }) => lighten(0.1, theme.aboutBg)};

  color: ${({ theme }) => theme.textSecondary};
`;

export const Work: React.FC = (): JSX.Element => {
  return (
    <StyledWork className="work">
      <StyledContainer>
        <Heading color="#e6e5e5"><Translate i18nKey="work" /></Heading>
      </StyledContainer>
    </StyledWork>
  );
};

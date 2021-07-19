import React from 'react';
import styled from 'styled-components';
import { Translate } from '../Translate/Translate';

const StyledAbout = styled.section`
  background: #444;
  color: white;
  height: 600px;
`;


export const About: React.FC = (): JSX.Element => {
  return (
    <StyledAbout className="about">
      <Translate i18nKey="about" />
    </StyledAbout>
  );
};

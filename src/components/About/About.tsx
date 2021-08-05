import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Me } from '../Me';
import { WhatIDo } from '../WhatIDo';
import { Skills } from '../Skills';
import { Translate } from '../Translate';

const StyledAbout = styled.section`
  background: #172737;
  /* background: radial-gradient(#ccc 15%, transparent 16%) 0 0, radial-gradient(#ccc 15%, transparent 16%) 5px 5px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 5px 6px;
  background-color: #e1e1e1;
  background-size: 10px 10px; */
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;


export const About: React.FC = (): JSX.Element => {
  return (
    <StyledAbout className="about">
      <StyledContainer>
        <Heading color="#e6e5e5"><Translate i18nKey="aboutMe" /></Heading>
        <Me />
        <WhatIDo />
        <Skills />
      </StyledContainer>
    </StyledAbout>
  );
};

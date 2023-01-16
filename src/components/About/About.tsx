import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Me } from '../Me';
import { WhatIDo } from '../WhatIDo';
import { Skills } from '../Skills';
import { Translate } from '../Translate';

const StyledAbout = styled.section`
  background: ${({ theme }) => theme.aboutBg};
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;


export const About: React.FC = () => {
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

import React from 'react';
import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Me } from '../Me';
import { WhatIDo } from '../WhatIDo';
import { Skills } from '../Skills';
import { Translate } from '../Translate';
import { StyledAbout } from '.';

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

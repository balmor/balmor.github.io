import React from 'react';
import styled from 'styled-components';
import { Circle } from '../Circle';
import { StyledH2 } from '../WhatIDo';
import { Html5 } from '@styled-icons/fa-brands/Html5';
import { Css3 } from '@styled-icons/fa-brands/Css3';
import { Node } from '@styled-icons/fa-brands/Node';
import { NodeJs as JavaScript } from '@styled-icons/fa-brands/NodeJs';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Git } from '@styled-icons/boxicons-logos/Git';

const StyledSkills = styled.div`
  width: 90rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto 3rem;
`;

export const Skills: React.FC = (): JSX.Element => (
  <>
    <StyledH2>Skills</StyledH2>
    <StyledSkills>
      <Circle percent={90} title="HTML5"><Html5 size={60} /></Circle>
      <Circle percent={90} title="CSS3"><Css3 size={60} /></Circle>
      <Circle percent={80} title="JavaScript"><JavaScript size={60} /></Circle>
      <Circle percent={60} title="TypeScript"><Typescript size={56} /></Circle>
      <Circle percent={90} title="React"><ReactLogo size={60} /></Circle>
      <Circle percent={80} title="Redux"><Redux size={56} /></Circle>
      <Circle percent={50} title="NodeJS"><Node size={60} /></Circle>
      <Circle percent={80} title="Git"><Git size={60} /></Circle>
    </StyledSkills>
  </>
);

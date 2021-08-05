import React from 'react';
import styled from 'styled-components';
import { FontFamilyTypes } from '../../utils';

export const StyledH3 = styled.h3`
  color: #e6e5e5;
`;

export const Me: React.FC = (): JSX.Element => (
  <>
    <StyledH3>
      Hello, my name is <strong>Damian Duda</strong> also known as{' '}
      <strong>balmor</strong>
    </StyledH3>
    <p>
      I’m a Regular Frontend Developer specializing in front end development.
      Experienced with all stages of the development cycle for dynamic web
      projects. Well-versed in numerous programming languages including
      JavaScript.
    </p>
    <p>
      I build, evolve and maintain websites that meet web standards and best
      practices.
    </p>
    <p>
      My front-end build process involves the use of tools such as React,
      Webpack and NPM to speed up development.
    </p>
    <p>
      I have a working knowledge of popular frameworks like Bootstrap &amp;
      Foundation and know my way around version management and working in Scrum,
      Kanban methotology teams.
    </p>
  </>
);

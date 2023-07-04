import React from 'react';

import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Translate } from '../Translate';

import { LineIcon } from '../LineIcon';
import { Github } from '@styled-icons/fa-brands/Github';
import {
  EXCHANGE_LINK,
  FRONTQUIZ_LINK,
  GITHUB_EXCHANGE_LINK,
  GITHUB_FRONTQUIZ_LINK,
  GITHUB_MOVIE_LINK,
  MOVIE_LINK,
} from '../../utils';
import {
  ProjectTitle,
  StyledDescription,
  StyledExamples,
  StyledExchangeCalc,
  StyledFrontendQuiz,
  StyledIcon,
  StyledMovie,
  StyledWork,
} from '.';

export const Work: React.FC = (): JSX.Element => {
  return (
    <StyledWork className="work">
      <StyledContainer>
        <Heading color="#e6e5e5">
          <Translate i18nKey="work" />
        </Heading>
        <StyledExamples>
          <div>
            <ProjectTitle>
              <h3>FrontendQUIZ</h3>
              <a href={GITHUB_FRONTQUIZ_LINK}>
                <Github size={24} />
              </a>
            </ProjectTitle>
            <StyledFrontendQuiz href={FRONTQUIZ_LINK}>
              <StyledDescription>
                nextjs · typescript · react · tailwindcss · contentful
              </StyledDescription>
              <StyledIcon>
                <LineIcon icon="attachment" size={50} />
              </StyledIcon>
            </StyledFrontendQuiz>
          </div>
          <div>
            <ProjectTitle>
              <h3>Exchange Calc</h3>
              <a href={GITHUB_EXCHANGE_LINK}>
                <Github size={24} />
              </a>
            </ProjectTitle>
            <StyledExchangeCalc href={EXCHANGE_LINK}>
              <StyledDescription>
                typescript · react · react·query · styled-components · material
                UI · webpack
              </StyledDescription>
              <StyledIcon>
                <LineIcon icon="attachment" size={50} />
              </StyledIcon>
            </StyledExchangeCalc>
          </div>
          <div>
            <ProjectTitle>
              <h3>Movie</h3>
              <a href={GITHUB_MOVIE_LINK}>
                <Github size={24} />
              </a>
            </ProjectTitle>
            <StyledMovie href={MOVIE_LINK}>
              <StyledDescription>
                typescript · react · styled-components · webpack
              </StyledDescription>
              <StyledIcon>
                <LineIcon icon="attachment" size={50} />
              </StyledIcon>
            </StyledMovie>
          </div>
        </StyledExamples>
      </StyledContainer>
    </StyledWork>
  );
};

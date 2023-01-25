import React from 'react';
import styled, { css } from 'styled-components';
import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Translate } from '../Translate';
import { lighten } from 'polished';
import movie from './../../images/movie.png';
import exchange from './../../images/exchange.png';
import { LineIcon } from '../LineIcon';
import { Github } from '@styled-icons/fa-brands/Github';
import {
  breakpoint,
  EXCHANGE_LINK,
  GITHUB_EXCHANGE_LINK,
  GITHUB_MOVIE_LINK,
  MOVIE_LINK,
} from '../../utils';

const StyledWork = styled.section`
  background: ${({ theme }) => lighten(0.1, theme.aboutBg)};
  color: ${({ theme }) => theme.textSecondary};
  padding-bottom: 8rem;
`;

const StyledExamples = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StyledDescription = styled.p`
  display: none;
  color: white;
  text-decoration: none;
  z-index: 4;
  margin: 5rem 3rem 2rem;
  font-weight: 700;
  height: 7rem;

  ${breakpoint('xs', 'md')`
    margin-top: 2rem;
    height: 5rem;
  `}
`;

const StyledIcon = styled.i`
  display: none;
  color: white;
  z-index: 4;
`;

const StyledImage = css`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 40rem;
  height: 28rem;
  border: 0.4rem solid ${({ theme }) => theme.aboutBg};
  border-radius: 0.9rem;
  flex-direction: column;
  align-items: center;

  &:hover {
    &:before {
      position: absolute;
      content: '';
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 2;
    }

    ${StyledDescription}, ${StyledIcon} {
      display: block;
    }
  }

  ${breakpoint('xs', 'md')`
    width: 30rem;
    height: 18rem;
  `}
`;

const StyledExchangeCalc = styled.a`
  ${StyledImage}

  background-image: url(${exchange});
`;

const StyledMovie = styled.a`
  ${StyledImage}

  background-image: url(${movie});
`;

const ProjectTitle = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
  }

  a:hover {
    color: #999;
  }
`;

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
              <h3>Exchange Calc</h3>
              <a href={GITHUB_EXCHANGE_LINK}>
                <Github size={24} />
              </a>
            </ProjectTitle>
            <StyledExchangeCalc href={EXCHANGE_LINK}>
              <StyledDescription>
                typescript / react / react-query / styled-components / Material
                UI / Webpack
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
                typescript / react / styled-components / Webpack
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

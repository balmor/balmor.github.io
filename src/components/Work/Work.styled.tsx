import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import movie from './../../images/movie.png';
import exchange from './../../images/exchange.png';
import frontquiz from './../../images/frontquiz.png';
import { breakpoint } from '../../utils';

export const StyledWork = styled.section`
  background: ${({ theme }) => lighten(0.1, theme.aboutBg)};
  color: ${({ theme }) => theme.textSecondary};
  padding-bottom: 8rem;
`;

export const StyledExamples = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 4rem;
`;

export const StyledDescription = styled.p`
  display: none;
  color: white;
  text-align: center;
  z-index: 4;
  margin: 5rem 3rem 2rem;
  font-weight: 700;
  height: 7rem;

  ${breakpoint('xs', 'md')`
    margin-top: 2rem;
    height: 5rem;
  `}
`;

export const StyledIcon = styled.i`
  display: none;
  color: white;
  z-index: 4;
`;

const StyledImage = css`
  position: relative;
  background-repeat: no-repeat;
  background-size: 40rem 28rem;
  background-position: center;
  text-decoration: none;
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

export const StyledFrontendQuiz = styled.a`
  ${StyledImage}

  background-image: url(${frontquiz});
`;

export const StyledExchangeCalc = styled.a`
  ${StyledImage}

  background-image: url(${exchange});
`;

export const StyledMovie = styled.a`
  ${StyledImage}

  background-image: url(${movie});
`;

export const ProjectTitle = styled.div`
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
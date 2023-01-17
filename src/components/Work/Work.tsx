import React from 'react';
import styled, { css } from 'styled-components';
import { Heading } from '../Heading';
import { StyledContainer } from '../StyledContainer';
import { Translate } from '../Translate';
import { lighten } from 'polished';
import movie from './../../images/movie.png';
import exchange from './../../images/exchange.png';
import { breakpoint } from 'styled-components-breakpoint';
import { LineIcon } from '../LineIcon';

const StyledWork = styled.section`
  background: ${({ theme }) => lighten(0.1, theme.aboutBg)};
  color: ${({ theme }) => theme.textSecondary};
  padding-bottom: 8rem;
`;

const StyledExamples = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${breakpoint('mobile', 'tablet')`
    flex-direction: column;
  `}
`;

const StyledDescription = styled.p`
  display: none;
  color: white;
  text-decoration: none;
  z-index: 4;
  margin: 5rem 3rem 2rem;
  font-weight: 700;
  height: 7rem;
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
      content: "";
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.8);
      z-index: 2;
    }

    ${StyledDescription}, ${StyledIcon} {
      display: block;
    }
  }

  ${breakpoint('mobile', 'tablet')`
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

export const Work: React.FC = (): JSX.Element => {
  return (
    <StyledWork className="work">
      <StyledContainer>
        <Heading color="#e6e5e5"><Translate i18nKey="work" /></Heading>
        <StyledExamples>
          <div>
            <h3>Exchange Calc</h3>
            <StyledExchangeCalc href="https://balmor.github.io/exchange-rate/">
              <StyledDescription>typescript / react / react-query / styled-components / Material UI / Webpack</StyledDescription>
              <StyledIcon><LineIcon icon="attachment" size={50} /></StyledIcon>
            </StyledExchangeCalc>
          </div>
          <div>
            <h3>Movie</h3>
            <StyledMovie href="https://balmor.github.io/movie_db">
              <StyledDescription>typescript / react / styled-components / Webpack</StyledDescription>
              <StyledIcon><LineIcon icon="attachment" size={50} /></StyledIcon>
            </StyledMovie>
          </div>
        </StyledExamples>
      </StyledContainer>
    </StyledWork>
  );
};

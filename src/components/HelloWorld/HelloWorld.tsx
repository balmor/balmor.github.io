import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Translate } from '../Translate';

const paragraph = css`
  font-size: 5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  line-height: 7rem;

  ${breakpoint('mobile', 'tablet')`
    font-size: 2rem;
    line-height: 4rem;
  `}
`;

const StyledHelloWorld = styled.div`
  position: relative;
  width: 70rem;
  margin: 0 auto;
  align-self: center;
  padding: 10rem 0;

  ${breakpoint('mobile', 'tablet')`
    padding: 5rem 0;
  `}
`;

const StyledHello = styled.p`
  ${paragraph}
  color: #e8f380;
  text-shadow: 0.1rem 0.2rem 0 rgb(0 0 0 / 20%);
`;

const StyledFront = styled.p`
  ${paragraph}
  color: #f5fac6;
  text-shadow: 0.1rem 0.2rem 0 rgb(0 0 0 / 10%);
`;

const StyledLocation = styled.p`
  ${paragraph}
  font-size: 2.5rem;
  color: white;
  text-shadow: 0.1rem 0.2rem 0 rgb(0 0 0 / 10%);
`;

export const HelloWorld: React.FC = (): JSX.Element => (
  <StyledHelloWorld>
    <StyledHello><Translate i18nKey='hello' /></StyledHello>
    <StyledFront><Translate i18nKey='front' /></StyledFront>
    <StyledLocation><Translate i18nKey='location' /></StyledLocation>
  </StyledHelloWorld>
);

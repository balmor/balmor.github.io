import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../utils';
import { Translate } from '../Translate';

const paragraph = css`
  font-size: 5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  line-height: 10rem;

  ${breakpoint('xs', 'md')`
    font-size: 3rem;
    line-height: 4rem;
  `}
`;

const StyledHelloWorld = styled.div`
  position: relative;
  margin: 0 auto;
  align-self: center;
  padding: 11rem 0;

  ${breakpoint('xs', 'md')`
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

export const HelloWorld: React.FC = (): JSX.Element => (
  <StyledHelloWorld>
    <StyledHello><Translate i18nKey='hello' /></StyledHello>
    <StyledFront><Translate i18nKey='front' /></StyledFront>
  </StyledHelloWorld>
);

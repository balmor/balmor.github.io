import React from 'react';
import { StyledFront, StyledHello, StyledHelloWorld } from '.';
import { Translate } from '../Translate';

export const HelloWorld: React.FC = (): JSX.Element => (
  <StyledHelloWorld>
    <StyledHello><Translate i18nKey='hello' /></StyledHello>
    <StyledFront><Translate i18nKey='front' /></StyledFront>
  </StyledHelloWorld>
);

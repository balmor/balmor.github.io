import React from 'react';
import { StyledH3 } from '.';
import { Translate } from '../Translate';

export const Me: React.FC = (): JSX.Element => (
  <>
    <StyledH3>
    <Translate i18nKey='name' /> <strong>Damian Duda</strong> <Translate i18nKey='known' /> <strong>balmor</strong>
    </StyledH3>
    <p>
      <Translate i18nKey='firstMeDescription' />
    </p>
    <p>
    <Translate i18nKey='secondMeDescription' />
    </p>
    <p>
    <Translate i18nKey='thirdMeDescription' />
    </p>
    <p>
    <Translate i18nKey='fourthMeDescription' />
    </p>
  </>
);

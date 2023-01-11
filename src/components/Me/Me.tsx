import React from 'react';
import styled from 'styled-components';
import { FontFamilyTypes } from '../../utils';
import { Translate } from '../Translate';

export const StyledH3 = styled.h3`
  color: #e6e5e5;
`;

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

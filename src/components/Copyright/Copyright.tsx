import React from 'react';
import { StyledCopyright, StyledName } from '.';
import { linkProperties } from '../Navigation';
import { Translate } from '../Translate';

export const Copyright: React.FC = (): JSX.Element => {
  return (
    <StyledCopyright>
      2022 © <StyledName to="contact" { ...linkProperties }>Damian Duda</StyledName>. <Translate i18nKey='rights' />.
    </StyledCopyright>
  );
};

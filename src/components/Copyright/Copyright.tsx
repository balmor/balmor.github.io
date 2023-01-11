import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-scroll';
import { linkProperties } from '../Navigation';
import { Translate } from '../Translate';

const StyledCopyright = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  font-size: 1.4rem;
`;

const StyledName = styled(Link)`
  color: ${({ theme }) => darken(0.1, theme.textSecondary)};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`;


export const Copyright: React.FC = (): JSX.Element => {
  return (
    <StyledCopyright>
      2022 © <StyledName to="contact" { ...linkProperties }>Damian Duda</StyledName>. <Translate i18nKey='rights' />.
    </StyledCopyright>
  );
};

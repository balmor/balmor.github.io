import React from 'react';
import styled from 'styled-components';
import { FontFamilyTypes } from '../../utils';

const StyledTitle = styled.div<StyledTitleProps>`
  h1 {
    font-family: ${FontFamilyTypes.ralewayLight}, Arial;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 28px;
    font-weight: normal;
    transition: 0.6s all ease;
    margin: 0;
  }

  h2 {
    color: ${({ theme }) => theme.textThird};
    transition: 0.6s all ease;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    margin: 0;
  }

  &:hover {
    h2 {
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;

type StyledTitleProps = {
  className?: string;
}

type TitleProps = StyledTitleProps & {
  title?: string;
  subtitle?: string;
}

export const Title: React.FC<TitleProps> = ({ title = 'Damian Duda', subtitle, className = '' }): JSX.Element => (
  <StyledTitle className={className}>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </StyledTitle>
);

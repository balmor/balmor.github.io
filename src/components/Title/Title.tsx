import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../utils';

const StyledTitle = styled.div<StyledTitleProps>`
  h1 {
    font-size: 24px;
    letter-spacing: -1px;
    line-height: 28px;
    font-weight: 100;
    transition: 0.6s all ease;
    margin: 0;
    color: ${({ loader }) => (loader ? 'white' : 'inherit')};
  }

  h2 {
    color: ${({ theme, loader }) => (loader ? '#8d9698' : theme.textThird)};
    transition: 0.6s all ease;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    margin: 0;

    ${breakpoint('xs', 'md')`
      display: none;
    `}
  }

  &:hover {
    h2 {
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;

type StyledTitleProps = {
  className?: string;
  loader?: boolean;
};

type TitleProps = StyledTitleProps & {
  title?: string;
  subtitle?: string;
  loader?: boolean;
};

export const Title: React.FC<TitleProps> = ({
  title = 'Damian Duda',
  subtitle,
  className = '',
  loader = false,
}): JSX.Element => (
  <StyledTitle className={className} loader={loader}>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </StyledTitle>
);

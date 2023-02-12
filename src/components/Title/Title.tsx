import React from 'react';
import { StyledTitle } from './Title.styled';

export type StyledTitleProps = {
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

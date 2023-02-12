import React, { ReactNode } from 'react';
import { StyledHeading } from './Heading.styled';

type HeadingProps = {
  children: ReactNode;
  color?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, color}): JSX.Element => {
  return (
    <StyledHeading color={color}>{children}</StyledHeading>
  )
};
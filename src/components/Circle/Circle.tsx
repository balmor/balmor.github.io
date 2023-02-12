import React, { ReactNode } from 'react';
import { StyledBar, StyledCircle, StyledFill, StyledSkillTitle, StyledSlice } from '.';

export type CircleProps = {
  percent: number;
  children: ReactNode;
  title?: string;
};

export const Circle: React.FC<CircleProps> = ({ percent, title, children }): JSX.Element => {
  const allowedPercent = percent < 0 || percent > 100 ? 0 : percent;
  return (
    <StyledCircle percent={allowedPercent}>
      <span>{`${percent}%`}</span>
      <i>{children}</i>
      <StyledSlice>
        <StyledBar />
        <StyledFill />
      </StyledSlice>
      <StyledSkillTitle>{title}</StyledSkillTitle>
    </StyledCircle>
  );
};

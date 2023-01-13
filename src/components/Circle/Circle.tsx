import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const pie = css`
  position: absolute;
  border: 1.1rem solid ${lighten(0.1, '#293946')};
  width: 9.8rem;
  height: 9.8rem;
  clip: rect(0em, 6rem, 12rem, 0em);
  border-radius: 50%;
`;

const StyledSlice = styled.div`
  position: absolute;
  width: 12rem;
  height: 12rem;
`;

const StyledBar = styled.div`
  ${pie}
  transform: rotate(0deg);
`;

const StyledFill = styled.div`
  ${pie}
`;

const StyledCircle = styled.div<CircleProps>`
  position: relative;
  font-size: 12rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  float: left;
  margin: 4rem;
  background: rgba(255,255,255,.1);
  transition: all 0.2s ease-out;

  &:after {
    position: absolute;
    display: block;
    box-sizing: content-box;
    content: ' ';
    border-radius: 50%;
    background-color: ${({ theme }) => theme.aboutBg};
    top: 0.5rem;
    left: 0.5rem;
    width: 11rem;
    height: 11rem;
    transition: all 0.2s ease-out;
  }

  && ${StyledSlice} {
    clip: ${({ percent }) => `${percent > 50 ? 'rect(auto, auto, auto, auto)' : 'rect(0em, 12rem, 12rem, 6rem)'}`};
  }

  && ${StyledBar} {
    transform: ${({ percent }) => `rotate(${(360 / 100) * percent}deg)`};

    &:after {
      transform: ${({ percent }) => `rotate(${percent > 50 ? 180 : 0}deg)`};
    }
  }

  && ${StyledFill} {
    transform: ${({ percent }) => `rotate(${percent > 50 ? 180 : 0}deg)`};
  }

  span {
    position: absolute;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    width: 12rem;
    line-height: 12rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    display: block;
    text-align: center;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.2s ease-out;
  }

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2.5rem;
    margin-left: -3rem;
    text-align: center;
    color: #8d9698;
    z-index: 1;
    font-size: 1.6rem;
    transition: all 0.2s ease-out;
  }

  &:hover {
    ${StyledFill}, ${StyledBar} {
      border-color: #3ab9d5;
    }

    &:after {
      top: 0.7rem;
      left: 0.7rem;
      width: 10.6rem;
      height: 10.6rem;
    }

    span {
      font-size: 3.5rem;
      opacity: 1;
    }

    i {
      opacity: 0;
    }
  }
`;

const StyledSkillTitle = styled.div`
  position: absolute;
  width: 12rem;
  top: auto;
  bottom: -3rem;
  left: 0;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: #ccc;
`;


type CircleProps = {
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

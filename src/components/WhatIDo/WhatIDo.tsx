import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LineIcon } from '../LineIcon';
import { StyledH3 } from '../Me';
import { whatIDoList } from './whatIDoList';
import { breakpoint } from '../../utils';


export const StyledH2 = styled.h2`
  margin-top: 4rem;
  color: #e6e5e5;

  ${breakpoint('xs', 'md')`
    display: none;
  `}
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;

  ${breakpoint('xs', 'md')`
    display: none;
    flex-direction: column;
    align-items: center;
  `}
`;

const StyledLi = styled.li`
  text-align: center;
  max-width: 34rem;
  padding: 1rem;
  width: 30rem;
  margin-bottom: 3rem;

  ${breakpoint('xs', 'md')`
    width: 20rem;
  `}
`;

export const WhatIDo: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  const renderWhatIDo = () => whatIDoList.map(({ icon, title }, index) => {
      return (
        <StyledLi key={index}>
          <LineIcon icon={icon}/>
          <StyledH3>{t(title)}</StyledH3>
        </StyledLi>
      )
    });

  return (
    <>
      <StyledH2>What I Do</StyledH2>
      <StyledUl>{renderWhatIDo()}</StyledUl>
    </>
  );
};

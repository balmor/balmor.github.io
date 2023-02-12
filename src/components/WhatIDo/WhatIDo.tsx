import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledH2, StyledLi, StyledUl } from '.';
import { LineIcon } from '../LineIcon';
import { StyledH3 } from '../Me';
import { whatIDoList } from './whatIDoList';

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

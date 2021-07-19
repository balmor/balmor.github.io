import React from 'react';
import styled from 'styled-components';
import { Translate } from '../Translate/Translate';

const StyledHome = styled.section`
  background: #999;
  color: ${({ theme }) => theme.textPrimary};
  height: 500px;
  padding-top: 100px;
`;


export const Home: React.FC = (): JSX.Element => {
  return (
    <StyledHome className="home">
      <Translate i18nKey="home" />
    </StyledHome>
  );
};

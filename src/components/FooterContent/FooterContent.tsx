import React from 'react';
import styled from 'styled-components';
import { Copyright } from '../Copyright';
import { Logo } from '../Logo';
import { Title } from '../Title';

const StyledHome = styled.section`
  color: ${({ theme }) => theme.textPrimary};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const StyledLogoText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export const FooterContent: React.FC = (): JSX.Element => {
  return (
    <StyledHome className="home">
      <StyledLogoText>
        <Logo size="small" color="gray" background="#eef2f4"/>
        <Title />
      </StyledLogoText>
      <Copyright />
    </StyledHome>
  );
};

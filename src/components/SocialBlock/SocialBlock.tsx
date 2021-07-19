import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.section`
  color: ${({ theme }) => theme.textPrimary};
  padding: 40px 0;
  text-align: center;
`;


export const SocialBlock: React.FC = (): JSX.Element => {
  return (
    <StyledHome className="home">
      Social Block
    </StyledHome>
  );
};

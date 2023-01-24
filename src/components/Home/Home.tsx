import React from 'react';
import styled from 'styled-components';
import cloud from '../../videos/cloud.webm';
import cloudImg from '../../images/cloud.png';
import { HelloWorld } from '../HelloWorld';

const StyledHome = styled.section`
  display: flex;
  position: relative;
  background: #eee;
  color: ${({ theme }) => theme.textPrimary};
  overflow: hidden;
  padding-top: 100px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.4rem;
    background: rgba(255, 255, 255, 0.2);
    z-index: 300;
  }
`;

type SourceProps = {
  onloadend?: () => void;
  src: string;
  type: string;
};

const StyledSource = styled.source<SourceProps>``;

const StyledClouds = styled.video`
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;

  @media (max-width: 35rem) {
    width: auto;
    height: 100%;
  }
`;

export const Home: React.FC = (): JSX.Element => {
  return (
    <StyledHome className="home">
      <StyledClouds
        loop
        autoPlay
        poster={cloudImg}
        muted
        onLoadStart={() => {
          console.log('onLoadStart');
        }}
        onLoadedData={() => {
          console.log('onLoadedData');
        }}
      >
        <StyledSource src={cloud} type="video/webm" />
      </StyledClouds>
      <HelloWorld />
    </StyledHome>
  );
};

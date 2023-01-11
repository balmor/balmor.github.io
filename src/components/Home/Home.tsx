import React from 'react';
import styled from 'styled-components';
import cloud from '../../videos/cloud.webm';
import { HelloWorld } from '../HelloWorld';

const StyledHome = styled.section`
  display: flex;
  position: relative;
  background: #eee;
  color: ${({ theme }) => theme.textPrimary};
  height: 50rem;
  overflow: hidden;
  padding-top: 100px;

  &:before {
    content: "";
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
}

const StyledSource = styled.source<SourceProps>``;

const StyledClouds = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const StyledDevIconsTop = styled.div`
  position: absolute;
  width: 100%;
  top: 13rem;
  color: yellow;
  text-align: center;
  line-height: 7rem;
`;

const StyledDevIconsBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3rem;
  color: orange;
  text-align: center;
  line-height: 7rem;
`;

export const Home: React.FC = (): JSX.Element => {
  return (
    <StyledHome className="home">
      <StyledClouds loop autoPlay muted >
        <StyledSource src={cloud} type="video/webm" />
      </StyledClouds>
      <StyledDevIconsTop>Icons Top</StyledDevIconsTop>
      <HelloWorld />
      <StyledDevIconsBottom>Icons Bottom</StyledDevIconsBottom>
    </StyledHome>
  );
};

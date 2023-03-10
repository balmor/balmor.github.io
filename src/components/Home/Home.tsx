import React, { useContext } from 'react';
import cloud from '../../videos/cloud.webm';
import cloudImg from '../../images/cloud.png';
import { HelloWorld } from '../HelloWorld';
import { ImageContext, ImageContextProps } from '../../context/ImageStore';
import { StyledClouds, StyledHome, StyledSource } from '.';

export type SourceProps = {
  onloadend?: () => void;
  src: string;
  type: string;
};

export const Home: React.FC = (): JSX.Element => {
  const { setLoader } = useContext<ImageContextProps>(ImageContext);

  return (
    <StyledHome className="home">
      <StyledClouds
        loop
        autoPlay
        poster={cloudImg}
        muted
        onLoadedData={() => {
          setLoader(false);
        }}
      >
        <StyledSource src={cloud} type="video/webm" />
      </StyledClouds>
      <HelloWorld />
    </StyledHome>
  );
};

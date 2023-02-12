import React, { useContext, useEffect } from 'react';
import { ImageContext, ImageContextProps } from '../../context/ImageStore';
import { Logo } from '../Logo';
import { Title } from '../Title';
import { StyledLogo, StyledPreloader, SVGLoader } from './Preloader.styled';

export type TLoader = {
  loader: boolean;
};

export const Preloader = () => {
  const { isLoading, setLoader } = useContext<ImageContextProps>(ImageContext);

  useEffect(() => {
    const LoaderPage = setTimeout(() => {
      setLoader(false);
    }, 900);
    return () => clearTimeout(LoaderPage);
  }, []);

  return (
    <StyledPreloader loader={isLoading}>
      <SVGLoader>
        <circle className="circle" cx="150" cy="150" r="149" fill="none" />
      </SVGLoader>
      <StyledLogo>
        <Logo size="large" color="blue" background="#21293C"/>
        <Title subtitle="frontend developer" loader />
      </StyledLogo>
    </StyledPreloader>
  );
};

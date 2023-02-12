import styled, { keyframes } from 'styled-components';
import { TLoader } from './Preloader';

export const StyledPreloader = styled.div<TLoader>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #1a1b23;
  width: 100%;
  height: 100%;
  z-index: 550;
  visibility: ${({ loader }) => (loader ? 'visible' : 'hidden')};
  opacity: ${({ loader }) => (loader ? '1' : '0')};
  z-index: 400;
  transition: all 0.2s ease-out;
  transform: scale(${({ loader }) => (loader ? '1' : '1.1')});
  background-repeat: repeat-x;
  background-image: linear-gradient(45deg, #3f3251, #002025);
`;

export const SVGKeyFrame = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  70% {
    stroke-dashoffset: 700;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const SVGLoader = styled.svg`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: inset 0 0 1px rgb(255 255 255 / 20%);

  circle {
    stroke: ${({ theme }) => theme.textThird};
    stroke-width: 4px;
    transform-origin: 100%;
    stroke-dasharray: 990;
    animation: ${SVGKeyFrame} 0.85s linear;
  }
`;

export const StyledLogo = styled.div`
  transition: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
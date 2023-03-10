import styled from 'styled-components';
import { SourceProps } from '.';

export const StyledHome = styled.section`
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
    z-index: 4;
  }
`;

export const StyledSource = styled.source<SourceProps>``;

export const StyledClouds = styled.video`
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;

  @media (max-width: 35rem) {
    width: auto;
    height: 100%;
  }
`;
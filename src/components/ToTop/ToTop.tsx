import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';


type StyledTopProps = {
  showArrow: boolean;
}

const StyledToTop= styled(ArrowIosUpwardOutline)<StyledTopProps>`
  position: fixed;
  display: inline-block;
  bottom: 40px;
  right: 40px;
  z-index: 2000;
  cursor: pointer;
  color: ${({ theme }) => theme.textThird};
  transition: 0.3s all ease;
  opacity: ${({ showArrow }) => showArrow ? 1 : 0};

  &:hover {
    transform: scale(1.15);
  }
`;

export const ToTop: React.FC = (): JSX.Element => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setShowArrow(window.scrollY > 100));
  }, []);

  return (<StyledToTop onClick={scrollToTop} size={60} showArrow={showArrow} />)
};

import React, { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { StyledToTop } from '.';

export type StyledTopProps = {
  showArrow: boolean;
}

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

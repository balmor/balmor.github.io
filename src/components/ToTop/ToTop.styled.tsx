import styled from 'styled-components';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';
import { StyledTopProps } from '.';

export const StyledToTop= styled(ArrowIosUpwardOutline)<StyledTopProps>`
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
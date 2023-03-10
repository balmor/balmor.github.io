import styled from 'styled-components';

export const StyledHeading = styled.h1`
  position: relative;
  display: inline-block;
  color: ${({ color, theme }) => (color ? color : theme.textFourth)};
  font-size: 3.2rem;
  margin: 4rem 0 2rem;

  &:before {
    position: absolute;
    bottom: -1rem;
    left: 0;
    content: "";
    display: block;
    width: 2.2rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.textThird};
  }

  &:first-letter{
    text-transform: capitalize;
  }
`;
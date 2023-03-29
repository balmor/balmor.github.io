import styled from 'styled-components';
import { breakpoint } from '../../utils';

export const StyledSkills = styled.div`
  max-width: 90rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto 3rem;
  align-items: center;

  ${breakpoint('xs', 'sm')`
    flex-direction: column;
  `}
`;
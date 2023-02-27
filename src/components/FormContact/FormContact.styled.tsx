import styled, { keyframes } from 'styled-components';
import { Loader } from '@styled-icons/feather/Loader';
import { Translate } from '../Translate';

export const StyledFormContact = styled.div`
  width: 70%;
`;

export const StyledForm = styled.form`
  max-width: 50rem;
`;

export const StyledErrorMessage = styled.p`
  color: red;
`;

export const StyledSuccessMessage = styled.p`
  color: green;
`;

export const StyledSendButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 22px;
  color: ${({ theme }) => theme.buttonBg};
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  transition: all 0.2s ease-out;

  & > span {
    margin-right: 1rem;
    vertical-align: middle;
  }

  &:hover {
    color: white;
    background: ${({ theme }) => theme.buttonBgHover};
  }
`;

const spinner = keyframes`
  0% { rotate: 0; opacity: 0.8;}
  50% { opacity: 0.5; }
  100% { rotate: 360deg; opacity: 0.8;}
`

export const StyledIconLoader = styled(Loader)`
  animation: ${spinner} 2s infinite linear;
`;
import styled from 'styled-components';

export const StyledFormContact = styled.div`
  width: 70%;
`;

export const StyledForm = styled.form`
  max-width: 50rem;

  p {
    color: red;
  }
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

  &:hover {
    color: white;
    background: ${({ theme }) => theme.buttonBgHover};
  }
`;
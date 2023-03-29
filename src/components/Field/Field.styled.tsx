import styled, { css } from 'styled-components';
import { ErrorField, InputProps, TouchedField } from '.';

export const StyledLabel = styled.label`
  position: absolute;
  bottom: -2rem;
  padding: 0 0.5rem;
  right: 1rem;
  font-size: 1.1rem;
  color: #999;
  opacity: 0;
  transition: all 0.4s ease;
`;

const fieldForm = css`
  height: 3rem;
  line-height: 3rem;
  border: none;
  border-bottom-width: 0.2rem;
  border-bottom-color: ${({ isError }: ErrorField) =>
    isError ? '#bf1313' : '#8ed7e7'};
  border-bottom-style: ${({
    isError,
    isTouched,
  }: TouchedField) => (isTouched || isError ? 'solid' : 'dotted')};
  width: 100%;
  max-width: 50rem;
  outline: none;
  padding-right: 7rem;
  box-sizing: border-box;
  background: ${({ theme }) => theme.fourth};
  color: ${({ theme }) => theme.inputLabel};

  ::placeholder {
    color: ${({ theme }) => theme.boxBg};
  }

  &:focus {
    border-bottom-style: solid;

    ::placeholder {
      color: ${({ theme }) => theme.fourth};
    }
  }

  &:focus + ${StyledLabel} {
    opacity: 1;
    bottom: 0.5rem;
  }
`;

export const StyledFormField = styled.div`
  position: relative;
  margin: 2rem 0;
  overflow: hidden;
`;

export const StyledInput = styled.input<InputProps>`
  ${fieldForm}
`;

export const StyledTextarea = styled.textarea<InputProps>`
  ${fieldForm}
  height: 7rem;
`;
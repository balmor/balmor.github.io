import React from 'react';
import { FieldErrors } from 'react-hook-form';
import styled, { css } from 'styled-components';

type DirtiedProps = {
  name?: Boolean;
  email?: Boolean;
  subject?: Boolean;
  message?: Boolean;
};

type FieldProps = {
  name?: string;
  label?: string;
  type?: string;
  errors: FieldErrors;
  touchedFields?: DirtiedProps;
};

type InputProps = {
  isError: Boolean;
  isTouched: Boolean;
  placeholder: string;
};

const StyledLabel = styled.label`
  position: absolute;
  bottom: -2rem;
  padding: 0 0.5rem;
  right: 1rem;
  font-size: 1.1rem;
  color: #999;
  opacity: 0;
  transition: all 0.4s ease;
`;

const fieldForm = css<FieldErrors>`
  height: 3rem;
  line-height: 3rem;
  border: none;
  border-bottom-width: 0.2rem;
  border-bottom-color: ${({ isError }) => (isError ? '#bf1313' : '#8ed7e7')};
  border-bottom-style: ${({ isError, isTouched }) =>
    isTouched || isError ? 'solid' : 'dotted'};
  width: 100%;
  max-width: 50rem;
  outline: none;
  padding-right: 7rem;
  box-sizing: border-box;

  &:focus {
    border-bottom-style: solid;

    ::placeholder {
      color: white;
    }
  }

  &:focus + ${StyledLabel} {
    opacity: 1;
    bottom: 0.5rem;
  }
`;

const StyledFormField = styled.div`
  position: relative;
  margin: 2rem 0;
  overflow: hidden;
`;

// type needs improvement
const StyledInput = styled.input<InputProps>`
  ${fieldForm}
`;

const StyledTextarea = styled.textarea<InputProps>`
  ${fieldForm}
  height: 7rem;
`;

export const Field: React.FC<FieldProps> = ({
  label,
  errors,
  type,
  touchedFields,
  ...textInputProps
}) => {
  const { name } = textInputProps;
  const isError = !!errors[name];
  const isTouched = !!touchedFields[name];
  const fieldProperties = {
    placeholder: label,
    isError,
    isTouched,
    ...textInputProps,
  };

  return (
    <StyledFormField>
      {type === 'textarea' ? (
        <StyledTextarea {...fieldProperties} />
      ) : (
        <StyledInput {...fieldProperties} />
      )}
      <StyledLabel>{label}</StyledLabel>
    </StyledFormField>
  );
};

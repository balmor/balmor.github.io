import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyledFormField, StyledInput, StyledLabel, StyledTextarea } from '.';

import { Inputs } from '../FormContact';

export type ErrorField = {
  isError: Boolean;
};

export type TouchedField = {
  isTouched: Boolean;
} & ErrorField;

export type InputProps = {
  placeholder: string;
} & TouchedField;

type FieldProps = {
  control: Control<Inputs>;
  name: 'name' | 'email' | 'subject' | 'message';
  label: string;
  type?: string;
  required?: boolean;
  pattern?: RegExp | undefined;
  onFocus?: () => void;
};

export const Field: React.FC<FieldProps> = ({
  control,
  name,
  label,
  type = '',
  required = false,
  pattern,
  onFocus,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, pattern }}
      render={({
        field,
        field: { value = '' },
        fieldState: { error = false, isTouched = false } = {},
      }) => {
        return (
          <StyledFormField>
            {type === 'textarea' ? (
              <StyledTextarea
                {...field}
                value={value}
                isError={!!error}
                isTouched={isTouched}
                placeholder={label}
                onFocus={onFocus}
              />
            ) : (
              <StyledInput
                {...field}
                value={value}
                isError={!!error}
                isTouched={isTouched}
                placeholder={label}
                onFocus={onFocus}
              />
            )}
            <StyledLabel>{label}</StyledLabel>
          </StyledFormField>
        );
      }}
    />
  );
};

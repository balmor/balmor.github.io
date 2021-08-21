import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledContactH2 } from '../Contact';
import { Field } from '../Field';
import { emailRegex } from '../../utils';

type Inputs = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const StyledFormContact = styled.div`
  width: 70%;
`;

const StyledForm = styled.form`
  max-width: 50rem;
`;

const StyledSendButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 22px;
  color: $lightBlue-color;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  transition: all 0.2s ease-out;

  &:hover {
    color: white;
    background: #3ab9d5;
  }
`;

export const FormContact: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<Inputs>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log('--> Submit form', data);

  const required = true;

  return (
    <StyledFormContact>
      <StyledContactH2>Form contact</StyledContactH2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field
          {...register('name', { required })}
          errors={errors}
          touchedFields={touchedFields}
        />
        <Field
          {...register('email', {
            required,
            pattern: emailRegex,
          })}
          errors={errors}
          touchedFields={touchedFields}
        />
        <Field
          {...register('subject')}
          errors={errors}
          touchedFields={touchedFields}
        />
        <Field
          {...register('message', { required })}
          type="textarea"
          errors={errors}
          touchedFields={touchedFields}
        />
        <StyledSendButton type="submit">Send</StyledSendButton>
      </StyledForm>
    </StyledFormContact>
  );
};

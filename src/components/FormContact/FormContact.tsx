import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledContactH2 } from '../Contact';
import { Field } from '../Field';
import { emailRegex } from '../../utils';
import { Translate } from '../Translate';

export type Inputs = {
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

export const FormContact: React.FC = (): JSX.Element => {
  const {
    control,
    handleSubmit,
  } = useForm<Inputs>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log('--> Submit form', data);

  return (
    <StyledFormContact>
      <StyledContactH2>
        <Translate i18nKey="form" />
      </StyledContactH2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field control={control} name={'name'} label={'Name'} required />
        <Field control={control} name={'email'} label={'Email'} pattern={emailRegex} required />
        <Field control={control} name={'subject'} label={'Subject'} />
        <Field control={control} name={'message'} label={'Message'} required type="textarea" />
        <StyledSendButton type="submit">
          <Translate i18nKey="send" />
        </StyledSendButton>
      </StyledForm>
    </StyledFormContact>
  );
};

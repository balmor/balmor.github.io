import React, { useReducer } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { StyledContactH2 } from '../Contact';
import { Field } from '../Field';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailRegex } from '../../utils';
import { Translate } from '../Translate';
import { FormIcons, StyledErrorMessage, StyledForm, StyledFormContact, StyledSendButton, StyledSuccessMessage } from '.';
import { emailClear, emailFailure, emailReducer, emailRequest, emailSuccess, initEmail } from '../../reducers/emailForm';

export type Inputs = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export const FormContact: React.FC = (): JSX.Element => {
  const [{ success, failure, loading, errorMessage }, dispatch] = useReducer(emailReducer, initEmail);

  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
  } = useForm<Inputs>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      dispatch(emailClear());
      dispatch(emailRequest());
      const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_PUBLIC_KEY);

      if (result.text !== 'OK') {
        console.log('result', result);
        throw new Error(result.text);
      }

      dispatch(emailSuccess());
    } catch(error) {
      if (error && typeof error === 'object' && 'text' in error) {
        dispatch(emailFailure(error.text as string));
      }
    };
  };

  const handleFocus = () => {
    if (success || failure) {
      dispatch(emailClear());
    }
  }

  return (
    <StyledFormContact>
      <StyledContactH2>
        <Translate i18nKey="form" />
      </StyledContactH2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field control={control} onFocus={handleFocus} name={'name'} label={t('inputName')} required />
        <Field control={control} onFocus={handleFocus} name={'email'} label={t('email')} pattern={emailRegex} required />
        <Field control={control} onFocus={handleFocus} name={'subject'} label={t('subject')} />
        <Field control={control} onFocus={handleFocus} name={'message'} label={t('message')} required type="textarea" />
        {failure && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
        {success && <StyledSuccessMessage><Translate i18nKey="formSuccess" /></StyledSuccessMessage>}
        <StyledSendButton type="submit">
          <Translate i18nKey="send" />
          <FormIcons { ...{ success, loading, failure }} />
        </StyledSendButton>
      </StyledForm>
    </StyledFormContact>
  );
};

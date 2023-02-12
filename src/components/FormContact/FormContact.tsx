import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledContactH2 } from '../Contact';
import { Field } from '../Field';
import { emailRegex } from '../../utils';
import { Translate } from '../Translate';
import { useTranslation } from 'react-i18next';
import { StyledForm, StyledFormContact, StyledSendButton } from '.';

export type Inputs = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export const FormContact: React.FC = (): JSX.Element => {
  const [formSuccess, setFormSuccess] = useState<boolean>(true);
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
  } = useForm<Inputs>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = () => setFormSuccess(false);

  return (
    <StyledFormContact>
      <StyledContactH2>
        <Translate i18nKey="form" />
      </StyledContactH2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field control={control} name={'name'} label={t('inputName')} required />
        <Field control={control} name={'email'} label={t('email')} pattern={emailRegex} required />
        <Field control={control} name={'subject'} label={t('subject')} />
        <Field control={control} name={'message'} label={t('message')} required type="textarea" />
        {!formSuccess && <p>{t('formError')}</p>}
        <StyledSendButton type="submit">
          <Translate i18nKey="send" />
        </StyledSendButton>
      </StyledForm>
    </StyledFormContact>
  );
};

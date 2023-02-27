import React from 'react';
import { CheckSquare } from '@styled-icons/feather/CheckSquare';
import { XSquare } from '@styled-icons/feather/XSquare';
import { Send } from '@styled-icons/feather/Send';
import { StyledIconLoader } from "."

type TFormIcons = {
  success: boolean,
  loading: boolean,
  failure: boolean,
}

export const FormIcons: React.FC<TFormIcons> = ({ success, loading, failure }) => {
  if (success) {
    return <CheckSquare size={26} />
  } else if (loading) {
    return <StyledIconLoader size={26} />
  } else if (failure) {
    return <XSquare size={26} />
  } else {
    return <Send size={26} />
  }
}
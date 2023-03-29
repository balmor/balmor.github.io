import { TEmail } from "./types";

// action
enum emailForm {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  CLEAR = 'CLEAR',
}

type TemailRequest = {
  type: emailForm.REQUEST;
}

type TemailSuccess = {
  type: emailForm.SUCCESS;
}

type TemailFailure = {
  type: emailForm.FAILURE;
  errorMessage: string;
}

type TemailClear = {
  type: emailForm.CLEAR;
}

type emailAction = TemailRequest | TemailSuccess | TemailFailure | TemailClear;

export const emailRequest = (): TemailRequest => ({
  type: emailForm.REQUEST,
});

export const emailSuccess = (): TemailSuccess => ({
  type: emailForm.SUCCESS
});

export const emailFailure = (errorMessage: string): TemailFailure => ({
  type: emailForm.FAILURE,
  errorMessage
});

export const emailClear = (): TemailClear => ({
  type: emailForm.CLEAR,
});

export const initEmail: TEmail = {
  success: false,
  failure: false,
  loading: false,
  errorMessage: '',
}

// reducer
export const emailReducer = (state: TEmail = initEmail, action: emailAction) => {
  switch(action.type) {
    case emailForm.REQUEST:
      return {
        ...state,
        success: false,
        failure: false,
        loading: true,
      }
    case emailForm.SUCCESS:
      return {
        ...state,
        success: true,
        failure: false,
        loading: false,
      }
    case emailForm.FAILURE:
      return {
        ...state,
        success: false,
        failure: true,
        loading: false,
        errorMessage: action.errorMessage,
      }
    case emailForm.CLEAR:
      return initEmail;
    default: return {
      ...state,
    }
  }
}
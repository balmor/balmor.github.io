import { TEmail } from "./types";

// action
enum emailForm {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  CLEAR = 'CLEAR',
}

export const emailRequest = () => ({
  type: emailForm.REQUEST,
});

export const emailSuccess = () => ({
  type: emailForm.SUCCESS
});

export const emailFailure = (errorMessage) => ({
  type: emailForm.FAILURE,
  errorMessage
});

export const emailClear = () => ({
  type: emailForm.CLEAR,
});

export const initEmail: TEmail = {
  success: false,
  failure: false,
  loading: false,
  errorMessage: '',
}

// reducer
export const emailReducer = (state = initEmail, action) => {
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
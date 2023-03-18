import { createReducer, on } from '@ngrx/store';
import { AppInitialState } from './AppInitialState';
import {
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordSuccess,
} from './login.actions';
import { LoginState } from './LoginState';

const initialState: LoginState =  AppInitialState.login;;

const reducer = createReducer(
  initialState,
  on(recoverPassword, (currentState: any) => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    };
  }),

  on(recoverPasswordSuccess, (currentState: any) => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    };
  }),

  on(recoverPasswordFail, (currentState: any, action) => {
    return {
        ...currentState,
        error: action.error,
        isRecoveredPassword: false,
        isRecoveringPassword: false,
  }
})

);

export function loginReducer(state: LoginState, action: any) {
  return reducer(state, action);
}

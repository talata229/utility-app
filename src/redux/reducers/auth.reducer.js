import { Record, Map } from 'immutable';
import {
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_SUCCESS,
} from '../actions/auth/constant';

// const initialState = {
//   currentUser: null,
// };
const AuthState = Record({
  currentUser: {
    uid: '',
    email: '',
    accessToken: '',
    refreshToken: '',
    displayName: '',
    photoURL: '',
    phoneNumber: ''
  },
});
const initialState = new AuthState();

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...prevState,
        currentUser: payload,
      };

    case AUTH_SIGN_OUT:
      return {
        ...prevState,
        currentUser: null,
      };
    default:
      debugger
      return prevState;
  }
};

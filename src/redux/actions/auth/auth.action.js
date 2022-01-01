import firebase from 'firebase/compat/app';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase';
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_START,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_START,
  AUTH_SIGN_UP_SUCCESS,
} from './constant';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
export const logOut = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: AUTH_SIGN_OUT,
  });
};

export const signUpEmail = (email, password) => async (dispatch, getState) => {
  dispatch({
    type: AUTH_SIGN_UP_START,
  });
  const authentication = getAuth();
  const response = await createUserWithEmailAndPassword(
    authentication,
    email,
    password
  );

  if (response) {
    dispatch({
      type: AUTH_SIGN_UP_SUCCESS,
      payload: response.user,
    });
    sessionStorage.setItem('AuthToken', response._tokenResponse.refreshToken);
  } else {
    dispatch({
      type: AUTH_SIGN_UP_ERROR,
    });
  }
};

export const signInEmail = (email, password) => async (dispatch, getState) => {
  dispatch({
    type: AUTH_SIGN_IN_START,
  });
  const authentication = getAuth();
  const response = await signInWithEmailAndPassword(
    authentication,
    email,
    password
  );
  
  const user = {
    uid: response.user.uid,
    email: response.user.email,
    accessToken: response.user.accessToken,
    refreshToken: response.user.refreshToken,
    displayName: response.user.displayName,
    photoURL: response.user.photoURL,
    phoneNumber: response.user.phoneNumber,
  };

  if (response) {
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      payload: user,
    });
  } else {
    dispatch({
      type: AUTH_SIGN_IN_ERROR,
    });
  }
};

export const signInWithGoogle = () => async (dispatch) => {
  dispatch({
    type: AUTH_SIGN_IN_START,
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
  const response = await auth.signInWithPopup(provider);
  const user = {
    uid: response.user.uid,
    email: response.user.email,
    accessToken: response.credential.accessToken,
    refreshToken: response.user.refreshToken,
    displayName: response.user.displayName,
    photoURL: response.user.photoURL,
    phoneNumber: response.user.phoneNumber,
  };
  dispatch({
    type: AUTH_SIGN_IN_SUCCESS,
    payload: user,
  });
};

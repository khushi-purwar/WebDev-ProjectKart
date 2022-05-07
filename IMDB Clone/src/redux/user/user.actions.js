import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const facebookSignInStart = () => ({
  type: UserActionTypes.FACEBOOK_SIGN_IN_START,
});

export const githubSignInStart = () => ({
  type: UserActionTypes.GITHUB_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const updateUserDetail = (userData, history) => ({
  type: UserActionTypes.UPDATE_USER_DETAILS,
  payload: userData,
  history,
});

export const updateUserPassword = (password, history) => ({
  type: UserActionTypes.UPDATE_USER_PASSWORD,
  payload: password,
  history,
});

export const resetUserPassword = (email) => ({
  type: UserActionTypes.RESET_USER_PASSWORD,
  payload: email,
});

export const updateUserEmail = (email, history) => ({
  type: UserActionTypes.UPDATE_USER_EMAIL,
  payload: email,
  history,
});

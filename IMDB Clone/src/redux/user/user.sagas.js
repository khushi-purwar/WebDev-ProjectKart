import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import { toast } from "react-toastify";

import {
  signInSuccess,
  signInFailure,
  signUpFailure,
  signUpSuccess,
  signOutSuccess,
  signOutFailure,
} from "./user.actions";
import { removeAllItemsFromWatchlist } from "../watchlist/watchlist.actions";

import {
  auth,
  googleProvider,
  facebookProvider,
  createUserProfileDocument,
  githubProvider,
  getCurrentUser,
  firestore,
} from "../../firebase/firebase.utils";
import { selectUser } from "./user.selectors";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
    toast.error("Oops! Something went wrong. Please try again.");
  }
}

export function* updateUserDetailsInFirebase({ payload, history }) {
  try {
    const userRef = yield firestore.doc(`users/${payload.id}`);
    yield userRef.update(payload);
    history.push("/account");
  } catch (error) {
    console.log(error);
    toast.error("Oops! Something went wrong. Please try again.");
  }
}

export function* updateUserPassInFirebase({ payload, history }) {
  const user = auth.currentUser;
  try {
    yield user.updatePassword(payload.newPassword);
    history.push("/account");
    toast.success("Password updated successfully!");
  } catch (error) {
    toast.error("Oops! Something went wrong. Please try again.");
    return error;
  }
}

export function* updateUserEmailInFirebase({ payload, history }) {
  try {
    yield auth.currentUser.updateEmail(payload.email);

    const userRef = yield firestore.doc(`users/${payload.id}`);
    delete payload["password"];
    yield userRef.update(payload);

    history.push("/account");
  } catch (error) {
    console.log(error);
    toast.error("Oops! Something went wrong. Please try again.");
    return error;
  }
}

export function* sendResetPassEmail() {
  const user = yield select(selectUser);

  try {
    yield auth.sendPasswordResetEmail(user.resetEmail);
  } catch (error) {
    console.log(error);
  }
}

export function* signInWithThirdParty(provider) {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getSnapShotFromUserAuth(user);
    toast.success("Sign in successful !");
  } catch (error) {
    yield put(signInFailure(error));
    toast.error("Oops! Something went wrong. Please try again.");
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    signInWithThirdParty,
    googleProvider
  );
}

export function* onFacebookSignInStart() {
  yield takeLatest(
    UserActionTypes.FACEBOOK_SIGN_IN_START,
    signInWithThirdParty,
    facebookProvider
  );
}

export function* onGithubSignInStart() {
  yield takeLatest(
    UserActionTypes.GITHUB_SIGN_IN_START,
    signInWithThirdParty,
    githubProvider
  );
}

export function* signUp({ payload: { email, password, name } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName: name } }));
    toast.success("Sign up successful !");
  } catch (error) {
    yield put(signUpFailure(error));
    toast.error("Oops! Something went wrong. Please try again.");
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(removeAllItemsFromWatchlist());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onUserSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
    toast.success("Sign in successful !");
  } catch (error) {
    yield put(signInFailure(error));
    toast.error("Oops! Something went wrong. Please try again.");
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onUserDataUpdate() {
  yield takeLatest(
    UserActionTypes.UPDATE_USER_DETAILS,
    updateUserDetailsInFirebase
  );
}

export function* onUserPassUpdate() {
  yield takeLatest(
    UserActionTypes.UPDATE_USER_PASSWORD,
    updateUserPassInFirebase
  );
}

export function* onUserEmailUpdate() {
  yield takeLatest(
    UserActionTypes.UPDATE_USER_EMAIL,
    updateUserEmailInFirebase
  );
}

export function* onResetPassword() {
  yield takeLatest(UserActionTypes.RESET_USER_PASSWORD, sendResetPassEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookSignInStart),
    call(onGithubSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onUserSignOutStart),
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onUserDataUpdate),
    call(onUserPassUpdate),
    call(onResetPassword),
    call(onUserEmailUpdate),
  ]);
}

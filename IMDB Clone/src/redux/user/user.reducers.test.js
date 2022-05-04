import * as actions from "./user.actions";
import userReducers from "./user.reducers";

describe("User Reducers", () => {
  const INITIAL_STATE = {
    currentUser: null,
    error: null,
    resetEmail: null,
  };

  let payload = {
    user: {
      id: 1,
      name: "test",
      email: "test@mail.ca",
    },
    additionalData: {
      displayName: "test name",
    },
  };

  let error = "error";

  it("should update currentUser on SIGN_IN_SUCCESS", () => {
    expect(
      userReducers(INITIAL_STATE, actions.signInSuccess(payload.user))
        .currentUser
    ).toEqual(payload.user);
  });

  it("should update currentUser on SIGN_UP_SUCCESS", () => {
    expect(
      userReducers(INITIAL_STATE, actions.signUpSuccess(payload)).currentUser
    ).toEqual(payload);
  });

  it("should throw error on SIGN_UP_FAILURE", () => {
    expect(
      userReducers(INITIAL_STATE, actions.signUpFailure(error)).error
    ).toEqual(error);
  });

  it("should throw error on SIGN_IN_FAILURE", () => {
    expect(
      userReducers(INITIAL_STATE, actions.signInFailure(error)).error
    ).toEqual(error);
  });

  it("should throw error on SIGN_OUT_FAILURE", () => {
    expect(
      userReducers(INITIAL_STATE, actions.signOutFailure(error)).error
    ).toEqual(error);
  });

  it("should clear currentUser state on SIGN_OUT_SUCCESS", () => {
    expect(
      userReducers(INITIAL_STATE, actions.signOutSuccess()).currentUser
    ).toEqual(INITIAL_STATE.currentUser);
  });

  it("should update currentUser on UPDATE_USER_DETAILS", () => {
    expect(
      userReducers(INITIAL_STATE, actions.updateUserDetail(payload.user))
        .currentUser
    ).toEqual(payload.user);
  });

  it("should set resetEmail on RESET_USER_PASSWORD", () => {
    expect(
      userReducers(INITIAL_STATE, actions.resetUserPassword(payload.user.email))
        .resetEmail
    ).toEqual(payload.user.email);
  });
});

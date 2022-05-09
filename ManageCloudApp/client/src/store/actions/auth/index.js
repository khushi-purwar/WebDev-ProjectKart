import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../../types";

export const register = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/users", formData, config);
    await dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser);
  } catch (err) {
    dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
  }
};

export const login = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/auth", formData, config);
    await dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser);
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

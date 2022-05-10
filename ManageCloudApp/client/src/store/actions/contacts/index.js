import axios from "axios";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CONTACT_ERROR,
  GET_CONTACTS,
  SET_SELECTED,
  CLEAR_SELECTED
} from "../../types";

export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get("/api/contacts/");
    dispatch({ type: GET_CONTACTS, payload: res.data });
  } catch (err) {
    dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
  }
};

export const addContact = contact => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/contacts/", contact, config);
    dispatch({ type: ADD_CONTACT, payload: res.data });
  } catch (err) {
    dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
  }
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (err) {
    dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
  }
};

export const updateContact = contact => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.put(
      `/api/contacts/${contact._id}`,
      contact,
      config
    );
    dispatch({ type: UPDATE_CONTACT, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
  }
};

export const filterContacts = text => {
  return { type: FILTER_CONTACT, payload: text };
};

export const setSelected = contact => {
  return { type: SET_SELECTED, payload: contact };
};

export const clearSelected = () => {
  return { type: CLEAR_SELECTED };
};

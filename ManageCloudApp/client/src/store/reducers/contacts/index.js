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
const initialState = {
  contacts: [],
  filtered: null,
  error: null,
  loading: true,
  selected: {}
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        ),
        loading: false
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case SET_SELECTED:
      return { ...state, selected: action.payload };

    case CLEAR_SELECTED:
      return { ...state, selected: {} };

    case CONTACT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default contactReducer;

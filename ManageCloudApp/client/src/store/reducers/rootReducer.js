import { combineReducers } from "redux";
import contactReducer from "./contacts/";
import authReducer from "./auth";
import alertReducer from "./alert";

const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: authReducer,
  alert: alertReducer
});

export default rootReducer;

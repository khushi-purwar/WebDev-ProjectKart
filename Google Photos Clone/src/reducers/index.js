import { combineReducers } from "redux";
import userReducer from "./userReducer";
import albumReducer from "./albumReducer";

const reducers = combineReducers({
  user: userReducer,
  currentAlbum: albumReducer,
});

export default reducers;

import { combineReducers } from "redux";
import agrisight from "./agrisight";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  agrisightReducer: agrisight,
  errors,
  messages,
  auth
});

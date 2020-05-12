import { combineReducers } from "redux";
import agrisight from "./agrisight";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  agrisightReducer: agrisight,
  errors,
  messages
});

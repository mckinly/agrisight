import { combineReducers } from "redux";
import agrisight from "./agrisight";
import errors from "./errors";

export default combineReducers({
  agrisightReducer: agrisight,
  errors
});

import { CREATE_MESSAGE } from "../actions/types";

const intitialState = {};

export default function(state = intitialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}

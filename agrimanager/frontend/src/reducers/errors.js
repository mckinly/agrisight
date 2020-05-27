import { GET_ERRORS } from "../actions/types";

const intitialState = {
  msg: {},
  status: null
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
}

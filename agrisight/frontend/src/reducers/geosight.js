import { GET_ADDRESS } from "../actions/types.js";

const initialState = {
  address: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    default:
      return state;
  }
}

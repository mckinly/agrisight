import { GET_ADDRESS, DELETE_ADDRESS } from "../actions/types.js";

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
    case DELETE_ADDRESS:
      return {
        ...state,
        address: state.address.filter(address => address.id !== action.payload)
      };
    default:
      return state;
  }
}

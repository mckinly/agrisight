import {
  GET_ACREAGE,
  DELETE_ACREAGE,
  ADD_ACREAGE,
  VIEW_ACREAGE
} from "../actions/types.js";

const initialState = {
  acreage: [],
  selected_acreage: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACREAGE:
      return {
        ...state,
        acreage: action.payload
      };
    case DELETE_ACREAGE:
      return {
        ...state,
        acreage: state.acreage.filter(acreage => acreage.id !== action.payload)
      };
    case ADD_ACREAGE:
      return {
        ...state,
        acreage: [...state.acreage, action.payload]
      };
    case VIEW_ACREAGE:
      return {
        ...state,
        selected_acreage: [action.payload]
      };
    default:
      return state;
  }
}

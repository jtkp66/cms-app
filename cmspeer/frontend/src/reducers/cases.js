import {
  GET_CASES,
  ADD_CASE,
  DELETE_CASE,
  CLEAR_CASES
} from "../actions/types.js";

const initialState = {
  cases: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CASES:
      return {
        ...state,
        cases: action.payload
      };
    case DELETE_CASE:
      return {
        ...state,
        cases: state.cases.filter(cse => cse.id !== action.payload)
      };
    case ADD_CASE:
      return {
        ...state,
        cases: [...state.cases, action.payload]
      };
    case CLEAR_CASES:
      return {
        ...state,
        cases: []
      };
    default:
      return state;
  }
}

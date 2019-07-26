import { GET_CASES, DELETE_CASE } from "../actions/types.js";

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
        cases: state.leads.filter(cse => cse.id !== action.payload)
      };
    default:
      return state;
  }
}

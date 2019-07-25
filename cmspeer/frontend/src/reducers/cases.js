import { GET_CASES } from "../actions/types.js";

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
    default:
      return state;
  }
}

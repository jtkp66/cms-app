import axios from "axios";

import { createMessage, returnErrors } from "./messages";

import { GET_CASES, ADD_CASE, DELETE_CASE } from "./types";

// GET CASES
export const getCases = () => dispatch => {
  axios
    .get("/api/cases/")
    .then(res => {
      dispatch({
        type: GET_CASES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addCase = cse => (dispatch, getState) => {
  axios
    .post("/api/cases/", cse, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCase: "Case Added" }));
      dispatch({
        type: ADD_CASE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteCase = () => dispatch => {
  axios
    .delete("/api/cases/")
    .then(res => {
      dispatch({
        type: DELETE_CASE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

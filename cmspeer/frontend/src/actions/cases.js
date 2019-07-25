import axios from "axios";

import { GET_CASES, DELETE_CASE } from "./types";

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

export const deleteCases = () => dispatch => {
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

import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import {
  GET_ACREAGE,
  DELETE_ACREAGE,
  ADD_ACREAGE,
  VIEW_ACREAGE
} from "./types";

export const getAcreage = () => dispatch => {
  axios
    .get("/api/agrisight/")
    .then(res => {
      dispatch({
        type: GET_ACREAGE,
        payload: res.data
      });
    })
    .catch(err =>
      disptach(returnErrors(err.response.data, error.response.status))
    );
};

export const deleteAcreage = id => dispatch => {
  axios
    .delete(`/api/agrisight/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteAcreage: "Acreage Deleted" }));
      dispatch({
        type: DELETE_ACREAGE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addAcreage = acreage => dispatch => {
  axios
    .post(`/api/agrisight/`, acreage)
    .then(res => {
      dispatch(createMessage({ addAcreage: "Acreage Added" }));
      dispatch({
        type: ADD_ACREAGE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const viewAcreage = id => dispatch => {
  // TODO: probably want to do some sort of Map component
  axios
    .get(`/api/agrisight/${id}/`)
    .then(res => {
      dispatch({
        type: VIEW_ACREAGE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

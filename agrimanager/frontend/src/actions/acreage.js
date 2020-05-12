import axios from "axios";
import {
  GET_ACREAGE,
  DELETE_ACREAGE,
  ADD_ACREAGE,
  VIEW_ACREAGE,
  GET_ERRORS
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
    .catch(err => console.log(err));
};

export const deleteAcreage = id => dispatch => {
  axios
    .delete(`/api/agrisight/${id}/`)
    .then(res => {
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
      dispatch({
        type: ADD_ACREAGE,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
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

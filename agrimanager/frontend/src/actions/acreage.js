import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import {
  GET_ACREAGE,
  DELETE_ACREAGE,
  ADD_ACREAGE,
  VIEW_ACREAGE,
} from "./types";

export const getAcreage = () => (dispatch, getState) => {
  axios
    .get("/api/agrisight/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ACREAGE,
        payload: res.data,
      });
    })
    .catch((err) =>
      disptach(returnErrors(err.response.data, error.response.status))
    );
};

export const deleteAcreage = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/agrisight/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteAcreage: "Acreage Deleted" }));
      dispatch({
        type: DELETE_ACREAGE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addAcreage = (acreage) => (dispatch, getState) => {
  axios
    .post(`/api/agrisight/`, acreage, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addAcreage: "Acreage Added" }));
      dispatch({
        type: ADD_ACREAGE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const viewAcreage = (id) => (dispatch, getState) => {
  // TODO: probably want to do some sort of Map component
  axios
    .get(`/api/agrisight/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: VIEW_ACREAGE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

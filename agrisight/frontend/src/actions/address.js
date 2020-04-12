import axios from "axios";
import { GET_ADDRESS, DELETE_ADDRESS, ADD_ADDRESS } from "./types";

export const getAddress = () => dispatch => {
  axios
    .get("/api/geosight/")
    .then(res => {
      dispatch({
        type: GET_ADDRESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteAddress = id => dispatch => {
  axios
    .delete(`/api/geosight/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_ADDRESS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addAddress = address => dispatch => {
  axios
    .post(`/api/geosight/`, address)
    .then(res => {
      dispatch({
        type: ADD_ADDRESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

import { GET_ADDRESS } from "./types";

// GET ADDRESS
export const getAddress = () => dispatch => {
  fetch("/api/geosight", { method: "GET" })
    .then(res => {
      dispatch({
        type: GET_ADDRESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

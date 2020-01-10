import axios from "axios";

export const LOADING = "LOADING";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const ADD_VEHICLE = "ADD_VEHICLE";
export const ADD_USER = "ADD_USER";
export const PERSONAL_INFO = "PERSONAL_INFO";

export const addVehicle = value => {
  return dispatch => {
    dispatch({ type: LOADING });
    return axios
      .post("https://labs-rv-life-staging-1.herokuapp.com/vehicle", value, {
        headers: { Authorization: localStorage.getItem("token") },
        "Content-Type": "application/json"
      })
      .then(res => {
        console.log("add vehicle res", res); // data was created successfully and logs to console

        dispatch({ type: ADD_VEHICLE, payload: res.data });
        return true;
      })
      .catch(err => {
        console.log("add vehicle err", err); // there was an error creating the data and logs to console
        dispatch({ type: ERROR_MESSAGE, errorMessage: "request failed" });
      });
  };
};

export const personalInfoAction = personalInfo => ({
  type: PERSONAL_INFO,
  payload: { personalInfo }
});

import axios, { Axios } from "axios";
import apiServer from "../../apis/api";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const FORM_SAVE = "FORM_SAVE";
export const REGISTER = "REGISTER";
export const GET_USERS = "GET_USERS";

const signInAction = (id, name, img) => {
  return {
    type: SIGN_IN,
    payload: {
      id: id,
      name: name,
      img: img,
    },
  };
};

const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};

const formAction = (formValues) => {
  return {
    type: FORM_SAVE,
    payload: formValues,
  };
};

const registerForm = (formValues) => async (dispatch, getState) => {
  const response = await axios.post(
    "http://localhost:3001/users",
    formValues,
    {}
  );
  dispatch({
    type: REGISTER,
    payload: response,
  });
};

const getAllUsers = () => async (dispatch, getState) => {
  const response = await axios.get("http://localhost:3001/users", {});
  console.log(response);

  dispatch({
    type: GET_USERS,
    payload: response,
  });
};

export { signInAction, signOutAction, formAction, registerForm, getAllUsers };

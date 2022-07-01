import axios from "axios";
import apiServer from "../../apis/api";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const FORM_SAVE = "FORM_SAVE";
export const REGISTER = "REGISTER";

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

const registerForm = (formValues) => (dispatch, getState) => {
  const response = axios.post("http://localhost:3001/users", formValues, {});
  dispatch({
    type: REGISTER,
    payload: response,
  });
};

export { signInAction, signOutAction, formAction, registerForm };

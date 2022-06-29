export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const FORM_SAVE = "FORM_SAVE";

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

export { signInAction, signOutAction, formAction };

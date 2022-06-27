import { SIGN_IN, SIGN_OUT } from "../actions/action";

export const initialState = { kirganmi: null };

const reducers = (state = initialState, action) => {
  if (action.type === SIGN_IN) {
    return { ...state, kirganmi: true };
  } else if (action.type === SIGN_OUT) {
    return { ...state, kirganmi: false };
  }
  return state;
};
export default reducers;

import { connect } from "react-redux";
import GoogleAuth from "../../components/GoogleAuth";
import { signInAction, signOutAction } from "../actions/action";

const getMyState = (state) => {
  return state;
};

const GoogleAuthContainer = connect(getMyState, {
  signInAction,
  signOutAction,
})(GoogleAuth);

export default GoogleAuthContainer;

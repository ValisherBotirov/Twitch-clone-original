import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginPage from "../../components/auth/LoginPage";
import { getAllUsers } from "../actions/action";
const validateForm = (values) => {
  const objError = {};
  if (!values.login) {
    objError.login = "Login kiritlmadi";
  }
  if (!values.parol) {
    objError.parol = "Parol kiritlmadi";
  }
  return objError;
};

const getMyState = (state) => {
  return state;
};

const connectLogin = connect(getMyState, { getAllUsers })(LoginPage);

const LoginContainer = reduxForm({ form: "loginForm", validate: validateForm })(
  connectLogin
);

export default LoginContainer;

import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Register from "../../components/auth/register";
import { registerForm } from "../actions/action";

const tekshir = (values) => {
  const errorObj = {};
  if (!values.login) {
    errorObj.login = "You must enter login input";
  }
  if (!values.password) {
    errorObj.password = "You must enter password input";
  }
  if (!values.fullName) {
    errorObj.fullName = "You must enter full name input";
  }
  if (!values.age) {
    errorObj.age = "You must enter age input";
  }
  return errorObj;
};

const getMyState = (state) => {
  return state;
};

const formRegister = reduxForm({ form: "register", validate: tekshir })(
  Register
);

const RegisterContainer = connect(getMyState, { registerForm })(formRegister);

export default RegisterContainer;

import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import StreamCreate from "../../components/streams/StreamCreate";

const getMyState = (state) => {
  return state;
};

const validateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Error!!! You must enter name!";
  }
  if (!values.about) {
    errors.about = "Error!! You must enter about";
  }
  return errors;
};

const StreamCreateContainer = reduxForm({
  form: "streamCreate",
  validate: validateForm,
})(StreamCreate);

export default StreamCreateContainer;

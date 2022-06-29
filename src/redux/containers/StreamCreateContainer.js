import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import StreamCreate from "../../components/streams/StreamCreate";

const getMyState = (state) => {
  return state;
};

const StreamCreateContainer = connect(getMyState)(
  reduxForm({ form: "streamCreate" })(StreamCreate)
);

export default StreamCreateContainer;

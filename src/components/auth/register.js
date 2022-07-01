import React from "react";
import { Field } from "redux-form";

class Register extends React.Component {
  renderInput = ({ input, meta, label }) => {
    console.log(meta);
    return (
      <div className="ui field">
        <label>{label}</label>
        <input {...input} />
        <h4 className="ui error message">{meta.touched ? meta.error : ""}</h4>
      </div>
    );
  };

  onSubmitForm = (values) => {
    this.props.registerForm(values);
  };

  render() {
    console.log(this.props);
    return (
      <div className="ui">
        <form
          className="ui form container error"
          onSubmit={this.props.handleSubmit(this.onSubmitForm)}
        >
          <Field
            name="login"
            label="Enter Login"
            component={this.renderInput}
          />
          <Field
            name="password"
            label="Enter Password"
            component={this.renderInput}
          />
          <Field
            name="fullName"
            label="Enter FullName"
            component={this.renderInput}
          />
          <Field name="age" label="Enter Age" component={this.renderInput} />
          <button className="ui button green large">
            <i className="icon apple" /> Register
          </button>
          <button onClick={this.props.reset} className="ui button yellow large">
            <i className="icon trash" /> Clear
          </button>
        </form>
      </div>
    );
  }
}
export default Register;

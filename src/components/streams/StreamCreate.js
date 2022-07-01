import React from "react";
import { Field } from "redux-form";

class StreamCreate extends React.Component {
  renderInput = ({ input, meta, label }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <p className="ui error message">
          {meta.touched && meta.error ? meta.error : ""}
        </p>
      </div>
    );
  };

  onSubmitForm = (formValues) => {
    console.log(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmitForm)}
        className="ui form error"
      >
        <Field name="name" label="Enter Name:" component={this.renderInput} />
        <Field name="about" label="Enter About" component={this.renderInput} />
        <button className="ui button green">Submit</button>
      </form>
    );
  }
}
export default StreamCreate;

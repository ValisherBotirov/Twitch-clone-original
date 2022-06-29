import React from "react";
import { Field, formValues } from "redux-form";

class StreamCreate extends React.Component {
  nameInput(formValueName) {
    console.log(formValueName);

    return <input type="text" onChange={formValueName.input.onChange} />;
  }
  aboutInput(formValueAbout) {
    return <input type="text" onChange={formValueAbout.input.onChange} />;
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.props);
  };

  render() {
    return (
      <form onSubmit={} className="ui form">
        <label className="field">Name:</label>
        <Field name="name" component={this.nameInput} />
        <label className="field">About:</label>
        <Field name="about" component={this.aboutInput} />
        <button className="ui button green">Submit</button>
      </form>
    );
  }
}
export default StreamCreate;

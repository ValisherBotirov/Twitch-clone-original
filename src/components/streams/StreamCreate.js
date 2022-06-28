import React, { useState } from "react";
import { Field } from "redux-form";

class StreamCreate extends React.Component {
  renderInputText({ input }) {
    console.log(input);
    return (
      <div>
        <input {...input} name="" type="text" />
      </div>
    );
  }

  renderInputSelect() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
  render() {
    return (
      <form>
        <Field name="title" component={this.renderInputText} />
        <Field name="description" component={this.renderInputSelect} />
      </form>
    );
  }
}

export default StreamCreate;

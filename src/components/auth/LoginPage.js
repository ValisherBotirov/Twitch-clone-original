import React, { Component } from "react";
import { Field } from "redux-form";
import { getAllUsers } from "../../redux/actions/action";
import GoogleAuthContainer from "../../redux/containers/GoogleAuthContainer";

class LoginPage extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  onSubmitForm = (values) => {
    console.log(this.props);
    this.props.getUsersReducers.map((val) => {
      if (val.login === values.login) {
        console.log("Tizimga kirdingiz");
      } else {
        console.log("Kirolmadiz");
      }
    });
  };

  renderInput = ({ input, meta, label, placeholder }) => {
    return (
      <div className="ui field">
        <label className="ui field">{label}</label>
        <input
          {...input}
          placeholder={placeholder}
          type={input.name === "parol" ? "password" : "text"}
        />
        <p className="ui error message">{meta.touched ? meta.error : ""}</p>
      </div>
    );
  };

  render() {
    return (
      <form
        className="ui form container error"
        onSubmit={this.props.handleSubmit(this.onSubmitForm)}
      >
        <Field
          name="login"
          label="Loginni kiriting : "
          placeholder="Login"
          component={this.renderInput}
        />
        <Field
          name="parol"
          label="Parolni kiriting : "
          placeholder="Login"
          component={this.renderInput}
        />
        <button className="ui button blue ">Tizimga kirish</button>

        <button className="ui button yellow ">Register</button>
        <p className="ui field"></p>
        <GoogleAuthContainer />
      </form>
    );
  }
}

export default LoginPage;

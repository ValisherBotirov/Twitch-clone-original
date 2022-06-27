import React from "react";
import { signInAction, signOutAction } from "../redux/actions/action";

class GoogleAuth extends React.Component {
  state = { kirganmisan: null };

  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "981717567391-bso3mhv9u0bju97m61p7hddfhht8emgs.apps.googleusercontent.com",
          plugin_name: "Twitch Clone",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.changeIsSignedIn(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.changeIsSignedIn);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  changeIsSignedIn = (qanday) => {
    if (qanday === true) {
      const userId = this.auth.currentUser.get().getBasicProfile().getId();
      const fullName = this.auth.currentUser.get().getBasicProfile().getName();
      const imgUrl = this.auth.currentUser
        .get()
        .getBasicProfile()
        .getImageUrl();

      this.props.signInAction();
    } else if (qanday === false) {
      this.props.signOutAction();
    }
  };

  signInClick = () => {
    return this.auth.signIn();
  };

  signOutClick = () => {
    return this.auth.signOut();
  };

  renderHTML = () => {
    console.log(this.props);
    if (this.props.kirganmi === null) {
      return <div>Kuting...</div>;
    } else if (this.props.kirganmi === true) {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ textAlign: "center" }}
              width="30px"
              height="30px"
              src={this.auth.currentUser.get().getBasicProfile().getImageUrl()}
            />
            <h3 style={{ marginTop: "0px" }}>
              {this.auth.currentUser.get().getBasicProfile().getName()}
            </h3>
          </div>
          <button onClick={this.signOutClick} className="ui button google red">
            <i className="google icon" /> Sign out
          </button>
        </div>
      );
    } else if (this.props.kirganmi === false) {
      return (
        <div>
          <button onClick={this.signInClick} className="ui button google green">
            <i className="google icon" /> Sign in
          </button>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderHTML()}</div>;
  }
}
export default GoogleAuth;

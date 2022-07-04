import React from "react";

class Login extends React.Component {
  kirdi = 0;

  renderHtml() {
    if (this.kirdi === 1) {
      return (
        <div style={{ display: "flex" }}>
          <h4 className="ui primary">Valisher Botirov</h4>
          <buttn className="ui button red ">Log out</buttn>
        </div>
      );
    } else if (this.kirdi === 0) {
      return (
        <div>
          <button className="ui button green">Login</button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderHtml()}</div>;
  }
}

export default Login;

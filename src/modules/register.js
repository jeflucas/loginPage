//Register Box

import React from "react";

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          <h2>Register:</h2>
        </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-name"
              placeholder="Username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail: </label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="E-mail"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterBox;

//Register Box

import React from "react";

class RegisterBox extends React.Component {
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
          <div className="input-group"></div>
          <div className="input-group"></div>
          <button></button>
        </div>
      </div>
    );
  }
}

export default RegisterBox;

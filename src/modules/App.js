import React from "react";
import LoginBox from "./login";
import RegisterBox from "./register";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isLoginOpen: false, isRegisterOpen: true });
  }

  render() {
    return (
      <div className="box">
        <div
          className={
            "controller " + (this.isLoginOpen ? "selected-contoller" : "")
          }
          onClick={this.showLoginBox.bind(this)}
        >
          Login
        </div>
        <div
          className={
            "controller " + (this.isRegisterOpen ? "selected-controller" : "")
          }
          onClick={this.showRegisterBox.bind(this)}
        >
          Register
        </div>
        {this.state.isLoginOpen && <LoginBox />}
        {this.state.isRegisterOpen && <RegisterBox />}
      </div>
    );
  }
}

export default App;

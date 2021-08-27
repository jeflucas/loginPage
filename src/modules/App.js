import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }

  render() {
    return (
      <div className="root-container">
        <h1>Opa</h1>
      </div>
    );
  }
}

export default App;

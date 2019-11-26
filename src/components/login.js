import React from "react";
import LoginForm from "./login-form";
import "../App.css";

class Login extends React.Component {
  render() {
    const { handleLogin, user } = this.props;

    return (
      <div className="Login">
        {user === "" ? (
          <LoginForm handleLogin={handleLogin} />
        ) : (
          <label className="LogoutForm">
            <div className="LogOutSelect"></div>
            <button
              className="LogoutButton"
              onClick={() => {
                handleLogin("");
              }}
            >
              Sign Out
            </button>
          </label>
        )}
      </div>
    );
  }
}

export default Login;

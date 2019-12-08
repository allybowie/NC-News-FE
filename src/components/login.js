import React from "react";
import LoginForm from "./login-form";
import "../App.css";

const Login = props => {
  const { handleLogin, user } = props;

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
};

export default Login;

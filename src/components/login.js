import React from "react";
import LoginForm from "./login-form";
import "../App.css";

class Login extends React.Component {
  // state = {
  //   selectedUser: "weegembump"
  // };

  // handleChange = event => {
  //   this.setState({ selectedUser: event.target.value });
  // };

  render() {
    const { handleLogin, user } = this.props;
    // const { selectedUser } = this.state;

    return (
      <div className="Login">
        {user === "" ? (
          // <form
          //   className="LoginForm"
          //   onSubmit={() => {
          //     handleLogin(selectedUser);
          //     this.setState({ selectedUser: "weegembump" });
          //   }}
          // >
          //   <select className="LoginSelect" onChange={this.handleChange}>
          //     <option>weegembump</option>
          //     <option>happyamy2016</option>
          //     <option>jessjelly</option>
          //     <option>grumpy19</option>
          //   </select>
          //   <button className="LoginButton">Sign In</button>
          // </form>
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

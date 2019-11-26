import React from "react";

class LoginForm extends React.Component {
  state = {
    selectedUser: "weegembump"
  };

  handleChange = event => {
    this.setState({ selectedUser: event.target.value });
  };

  render() {
    const { handleLogin } = this.props;
    const { selectedUser } = this.state;
    return (
      <form
        className="LoginForm"
        onSubmit={() => {
          handleLogin(selectedUser);
          this.setState({ selectedUser: "weegembump" });
        }}
      >
        <select className="LoginSelect" onChange={this.handleChange}>
          <option>weegembump</option>
          <option>happyamy2016</option>
          <option>jessjelly</option>
          <option>grumpy19</option>
        </select>
        <button className="LoginButton">Sign In</button>
      </form>
    );
  }
}

export default LoginForm;

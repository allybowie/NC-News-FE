import React from 'react';
import '../App.css'
import {Link} from '@reach/router';

class Login extends React.Component {
state = {
    selectedUser: "weegembump"
}

handleChange = event => {
    this.setState({selectedUser: event.target.value})
}

    render () {

        const {handleLogin, user} = this.props

        return <div className="Login">
            {user === "" ? <form onSubmit={()=>{handleLogin(this.state.selectedUser)
            this.setState({selectedUser: "weegembump"})}}>
                <select onChange={this.handleChange}>
                    <option>weegembump</option>
                    <option>happyamy2016</option>
                    <option>jessjelly</option>
                    <option>grumpy19</option>
                </select>
                <button>Login</button>
            </form> : <button onClick={()=>{handleLogin("")}}>Sign Out</button>}
            
        </div>
    }
}

export default Login;
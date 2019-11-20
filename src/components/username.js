import React from 'react';
import '../App.css'

class Username extends React.Component {
    render () {
        const {user} = this.props
        return <div className="Username">
            {user === "" ? <p className="UserText">User: Guest</p> : <p className="UserText">
                User: {user}
            </p>}
        </div>
    }
}

export default Username;
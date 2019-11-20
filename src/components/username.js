import React from 'react';
import '../App.css'

class Username extends React.Component {
    render () {
        const {user} = this.props
        return <div className="Username">
            <p className="UserText">
                {user}
            </p>
        </div>
    }
}

export default Username;
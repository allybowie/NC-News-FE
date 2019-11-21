import React from "react";
import "../App.css";
import { Link } from "@reach/router";
import house from'./house48.png'

class HomeButton extends React.Component {
    render() {
        const {goHome} = this.props
        return <div className="HomeButton">
            <Link to="/" onClick={goHome}><img src={house} alt="Home Button" /></Link>
        </div>
    }
}

export default HomeButton;

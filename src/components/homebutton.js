import React from "react";
import "../App.css";
import { Link } from "@reach/router";

class HomeButton extends React.Component {
    render() {
        const {goHome} = this.props
        return <div className="HomeButton">
            <Link to="/" onClick={goHome}>Front Page</Link>
        </div>
    }
}

export default HomeButton;

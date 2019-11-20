import React from "react";
import "../App.css";
import { Link } from "@reach/router";

class HomeButton extends React.Component {
    render() {
        return <div className="HomeButton">
            <Link to="/">Front Page</Link>
        </div>
    }
}

export default HomeButton;

import React from "react";
import "../App.css";
import { Link } from "@reach/router";
import house from "./house.png";

const HomeButton = () => {
  return (
    <div className="HomeButton">
      <Link to="/">
        <img src={house} alt="Home Button" />
      </Link>
    </div>
  );
};

export default HomeButton;

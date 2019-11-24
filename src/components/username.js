import React from "react";
import "../App.css";

const Username = props => {
  const { user } = props;

  return (
    <div className="Username">
      {user === "" ? (
        <p className="UserText">Signed in as Guest</p>
      ) : (
        <p className="UserText">Welcome, {user}</p>
      )}
    </div>
  );
};

export default Username;

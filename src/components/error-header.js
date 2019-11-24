import React from "react";
import "../App.css";

const ErrorHeader = props => {
  const { error, description } = props;

  return (
    <div className="IndividualHeader">
      <p className="ArtCardTitle">Error {error}</p>
      <p className="ArtCardAuthorBlock">Description: {description}</p>
    </div>
  );
};

export default ErrorHeader;

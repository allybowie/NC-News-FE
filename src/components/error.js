import React from "react";
import "../App.css";
import ErrorHeader from "./error-header";

const ErrorPage = () => {
  const error = "404";
  const description = "Route not found";

  return <ErrorHeader error={error} description={description} />;
};

export default ErrorPage;

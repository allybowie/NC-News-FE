import React from "react";

const ArticlesHeader = props => {
  const searchTerm = props.title;

  return (
    <>
      <p className="ArticlesHeader">nc/{searchTerm}</p>
    </>
  );
};

export default ArticlesHeader;

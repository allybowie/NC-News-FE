import React from "react";

const ArticlesHeader = props => {
  const searchTerm = props.title;

  return (
    <>
      {searchTerm === undefined ? (
        <p className="ArticlesHeader">Front Page</p>
      ) : (
        <p className="ArticlesHeader">nc/{searchTerm}</p>
      )}
    </>
  );
};

export default ArticlesHeader;

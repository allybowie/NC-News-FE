import React from "react";
import "../App.css";
import VotesCounter from "./vote";

const SingleHeader = props => {
  const { title, date, author, topic, votes, id, user } = props;

  return (
    <div className="IndividualHeader">
      <p className={"IndiHeaderTitle"}>{title}</p>
      <p className="IndiHeaderTopic">Subject: {topic}</p>
      <p className={"IndiHeaderAuthor"}>Written by {author}</p>
      <p className="IndiHeaderDate">Posted on {date}</p>
      <VotesCounter
        votes={votes}
        id={id}
        className="IndiHeaderVotes"
        card="Article"
        patch="articles"
        user={user}
      />
    </div>
  );
};

export default SingleHeader;

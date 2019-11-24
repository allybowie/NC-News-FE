import React from "react";
import "../App.css";
import VoteCounter from "./vote";
import * as api from "../api";

const CommentCard = props => {
  const { user, position, comment, removeDeletedComment } = props;

  const { author, body, created_at, votes, comment_id } = comment;

  const handleClick = () => {
    api.deleteComment(comment.comment_id).then(() => {
      removeDeletedComment(comment.comment_id);
    });
  };

  let listClass = "";

  if (position % 2 === 0) {
    listClass = "CommentEven";
  } else listClass = "CommentOdd";

  const date = new Date(created_at).toLocaleString();

  return (
    <li className={listClass}>
      <p className="CommentAuthor">{author}</p>
      <p className="CommentBody">{body}</p>
      <p className="CommentDate">{date}</p>
      <VoteCounter
        className="CommentVotes"
        votes={votes}
        card="Comment"
        patch="comments"
        user={user}
        id={comment_id}
      />
      {user === author && (
        <button onClick={handleClick} className="DeleteComment">
          Delete Comment
        </button>
      )}
    </li>
  );
};

export default CommentCard;

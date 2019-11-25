import React from "react";
import "../App.css";
import VoteCounter from "../components/vote";
import * as api from "../api";
import createDate from "../utils/create-date-string";

const CommentCard = props => {
  const { user, comment, removeDeletedComment, listClass } = props;

  const { author, body, created_at, votes, comment_id } = comment;

  const handleClick = () => {
    api.deleteComment(comment.comment_id).then(() => {
      removeDeletedComment(comment.comment_id);
    });
  };

  const date = createDate(created_at);

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

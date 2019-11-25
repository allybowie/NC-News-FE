import React from "react";
import "../App.css";
import CommentCard from "./comment-card";

const CommentsList = props => {
  const { comments, user, removeDeletedComment } = props;
  return comments.map((comment, i) => {
    let listClass;
    if (i % 2 === 0) {
      listClass = "CommentEven";
    } else listClass = "CommentOdd";
    return (
      <CommentCard
        key={`${comment.comment_id}`}
        comment={comment}
        listClass={listClass}
        user={user}
        removeDeletedComment={removeDeletedComment}
      />
    );
  });
};

export default CommentsList;

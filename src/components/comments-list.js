import React from "react";
import CommentsList from "./create-comment-list";
import isDisabled from "../utils/feature-disable";
import "../App.css";
import * as api from "../api";

class CommentList extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    inputValue: ""
  };

  componentDidMount() {
    api.fetchComments(this.props.id).then(({ data }) => {
      this.setState({ comments: data.comments, isLoading: false });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.Comment;
    const { user } = this.props;

    api.addComment(this.props.id, user, value).then(({ data: { comment } }) => {
      const newComments = [comment, ...this.state.comments];
      this.setState({ inputValue: "", comments: newComments });
    });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  removeDeletedComment = comment_id => {
    const { comments } = this.state;
    let sansDeleted = comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({ comments: sansDeleted });
  };

  render() {
    const { user } = this.props;
    const { isLoading, comments, inputValue } = this.state;

    const disabled = isDisabled(user);

    let placeHolder = "Leave your thoughts below...";

    if (disabled)
      placeHolder =
        "Commenting is not enabled for guests. Please sign in to leave a comment...";

    return (
      <>
        {isLoading ? (
          <p>Loading comments...</p>
        ) : (
          <ul className="CommentList">
            <form disabled={disabled} onSubmit={this.handleSubmit}>
              <textarea
                required
                name="Comment"
                className="LeaveComment"
                value={inputValue}
                onChange={this.handleChange}
                placeholder={placeHolder}
              ></textarea>
              <button className="LeaveCommentButton">Leave Comment</button>
            </form>
            <CommentsList
              comments={comments}
              user={user}
              removeDeletedComment={this.removeDeletedComment}
            />
          </ul>
        )}
      </>
    );
  }
}

export default CommentList;

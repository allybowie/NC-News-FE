import React from "react";
import "../App.css";
import SingleHeader from "./single-article-header";
import CommentList from "./comments-list";

class ArticleById extends React.Component {
  state = {
    commentsShown: false,
    inputValue: ""
  };

  handleCommentClick = () => {
    this.setState({ commentsShown: !this.state.commentsShown });
  };

  render() {
    const {
      title,
      body,
      id,
      comment_count,
      topic,
      date,
      author,
      votes,
      user
    } = this.props;

    const { commentsShown } = this.state;
    return (
      <div className="ArticleDiv">
        <SingleHeader
          title={`${title}`}
          comment_count={`${comment_count}`}
          topic={`${topic}`}
          date={`${date}`}
          author={`${author}`}
          id={id}
          votes={`${votes}`}
          user={user}
        />

        <div className="ArticleBody">{body}</div>
        <label className="ShowComments">
          <button onClick={this.handleCommentClick} className="CommentsButton">
            {commentsShown ? (
              <p className="CommentButtonText">Hide Comments</p>
            ) : (
              <p className="CommentButtonText">Show Comments</p>
            )}
          </button>
        </label>
        {commentsShown && (
          <CommentList id={`${id}`} user={user} commentsShown={commentsShown} />
        )}
      </div>
    );
  }
}

export default ArticleById;

import React from "react";
import { Link } from "@reach/router";
import "../App.css";
import VoteCounter from "./vote";
import createDate from "../utils/create-date-string";

class ArticleCard extends React.Component {
  state = {
    showComments: false
  };

  render() {
    const {
      article: {
        article_id,
        title,
        author,
        topic,
        comment_count,
        created_at,
        votes
      },
      user,
      listClass
    } = this.props;

    return (
      <div className={listClass}>
        <Link to={`/articles/${article_id}`}>
          <li className="ArticleListItem">
            <p className="ArtCardTitle">{title}</p>
            <p className="ArtCardAuthorBlock">Author: {author}</p>
            <p className="ArtCardTopic">Category: {topic}</p>
            <p className="ArtCardComments">Comments: {comment_count}</p>
            <p className="ArtCardDate">Created at: {createDate(created_at)}</p>
          </li>
        </Link>
        <VoteCounter
          votes={+votes}
          id={article_id}
          className="ArtCardVotes"
          card="ArtCard"
          patch="articles"
          user={user}
        />
      </div>
    );
  }
}

export default ArticleCard;

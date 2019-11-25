import React from "react";
import ArticleById from "./article-by-id";
import "../App.css";
import ErrorHeader from "./error-header";
import * as api from "../api";
import createDate from "../utils/create-date-string";

class ArticlePage extends React.Component {
  state = {
    article: "",
    isLoading: true,
    error: null
  };

  componentDidMount() {
    api
      .fetchArticle(this.props.id)
      .then(({ data: { article } }) => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        const {
          status,
          data: { msg }
        } = error.response;
        this.setState({
          error: { status, msg }
        });
      });
  }

  render() {
    const {
      article: {
        title,
        body,
        article_id,
        comment_count,
        topic,
        created_at,
        author,
        votes
      },
      isLoading,
      error
    } = this.state;

    const { user } = this.props;

    if (error !== null)
      return <ErrorHeader error={error.status} description={error.msg} />;

    return (
      <div>
        {isLoading ? (
          <h1>Loading article...</h1>
        ) : (
          <div>
            <ArticleById
              user={user}
              body={`${body}`}
              title={`${title}`}
              id={`${article_id}`}
              comment_count={`${comment_count}`}
              topic={`${topic}`}
              date={`${createDate(created_at)}`}
              author={`${author}`}
              votes={`${votes}`}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ArticlePage;

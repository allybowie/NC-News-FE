import React from "react";
import ArticleById from "./article-by-id";
import "../App.css";
import ErrorHeader from "./error-header";
import * as api from "../api";

class ArticlePage extends React.Component {
  state = {
    article: "",
    isLoading: true,
    error: null
  };

  componentDidMount() {
    api
      .fetchArticle(this.props.id)
      .then(response => {
        this.setState({ article: response.data.article, isLoading: false });
      })
      .catch(error => {
        this.setState({
          error: { status: error.response.status, msg: error.response.data.msg }
        });
      });
  }

  render() {
    const { error } = this.state;

    const {
      title,
      body,
      article_id,
      comment_count,
      topic,
      created_at,
      author,
      votes
    } = this.state.article;
    const { isLoading } = this.state;
    const { user } = this.props;

    const formattedDate = new Date(created_at).toLocaleString();

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
              date={`${formattedDate}`}
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

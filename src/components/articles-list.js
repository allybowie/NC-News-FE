import React from "react";
import "../App.css";
import ArticlesHeader from "./article-header";
import ArticleCard from "./article-card";
import ScrollUpButton from "react-scroll-up-button";
import ErrorHeader from "./error-header";
import * as api from "../api";
import { Link } from "@reach/router";
import createParams from "../utils";

class ArticlesList extends React.Component {
  state = {
    searchTerm: "",
    articlesList: [],
    isLoading: true,
    page: 1,
    sort_by: "created_at",
    order: "asc",
    error: null
  };

  componentDidMount() {
    const {
      location: { search },
      uri
    } = this.props;

    const params = createParams(uri, search);

    api
      .getArticles(params)
      .then(articlesList => {
        if (params.topic) {
          this.setState({
            articlesList,
            isLoading: false,
            topic: params.topic
          });
        } else {
          this.setState({
            articlesList,
            isLoading: false,
            topic: "",
            error: null
          });
        }
      })
      .catch(error => {
        this.setState({
          error: {
            status: error.response.status,
            msg: error.response.data.msg,
            topic: "",
            isLoading: false
          }
        });
      });
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search },
      uri
    } = this.props;

    window.scrollTo(0, 0);
    const params = createParams(uri, search);

    if (params.topic && prevProps.uri !== this.props.uri) {
      this.setState({ topic: params.topic });
    }

    if (this.props !== prevProps) {
      this.setState({ isLoading: true });
      api
        .getArticles(params)
        .then(articlesList => {
          this.setState({ articlesList, isLoading: false, error: null });
        })
        .catch(error => {
          this.setState({
            error: {
              status: error.response.status,
              msg: error.response.data.msg
            },
            topic: "",
            isLoading: false
          });
        });
    }
  }

  handleOrder = event => {
    this.setState({ order: event.target.value });
  };

  handleSort = event => {
    this.setState({ sort_by: event.target.value });
  };

  render() {
    const {
      location: { search },
      uri
    } = this.props;

    const params = createParams(uri, search);

    let { articlesList, isLoading, sort_by, order, error, topic } = this.state;
    const { user } = this.props;

    let category = topic;
    if (params.topic === "") {
      category = "front page";
    }

    let arrayIndex = 0;

    if (error !== null)
      return <ErrorHeader error={error.status} description={error.msg} />;

    return (
      <>
        <div className="ArticleDiv">
          <ArticlesHeader title={category} />
          <form className="Sort">
            <label className="SortBy">
              Sort By:
              <select onChange={this.handleSort} className="SortSelect">
                <option value="created_at">Date</option>
                <option value="votes">Popularity</option>
                <option value="comment_count">Activity</option>
              </select>
            </label>
            <label className="SortOrder">
              Order:
              <select onChange={this.handleOrder} className="OrderSelect">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </label>
            {params.topic === "" ? (
              <Link
                to={`/?sort_by=${sort_by}&&order=${order}`}
                className="SortLink"
              >
                Sort Articles
              </Link>
            ) : (
              <Link
                to={`/articles/topic/${this.state.topic}?sort_by=${sort_by}&&order=${order}`}
                className="SortLink"
              >
                Sort Articles
              </Link>
            )}
          </form>

          <ul className="ArticlesList">
            {isLoading ? (
              <p className="Loading">We're getting your articles...</p>
            ) : (
              articlesList.map(article => {
                arrayIndex++;
                return (
                  <ArticleCard
                    key={article.article_id}
                    article={article}
                    position={arrayIndex}
                    user={user}
                  />
                );
              })
            )}
            {<ScrollUpButton />}
          </ul>
        </div>
      </>
    );
  }
}

export default ArticlesList;

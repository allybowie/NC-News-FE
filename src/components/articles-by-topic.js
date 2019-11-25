import React from "react";
import "../App.css";
import ArticlesHeader from "./article-header";
import ErrorHeader from "./error-header";
import Sort from "./sort-component";
import ArticlesList from "./articles-list";
import * as api from "../api";
import createParams from "../utils/createParams";

class ArticlesByTopic extends React.Component {
  state = {
    searchTerm: "",
    articlesList: [],
    isLoading: true,
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
          const {
            status,
            data: { msg }
          } = error.response;
          this.setState({
            error: {
              status,
              msg
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

    if (error !== null)
      return <ErrorHeader error={error.status} description={error.msg} />;

    return (
      <>
        <div className="ArticleDiv">
          <ArticlesHeader title={category} />
          <Sort
            handleOrder={this.handleOrder}
            handleSort={this.handleSort}
            sort_by={sort_by}
            order={order}
            topic={params.topic}
          />
          <ArticlesList
            articlesList={articlesList}
            isLoading={isLoading}
            user={user}
          />
        </div>
      </>
    );
  }
}

export default ArticlesByTopic;

import React from "react";
import "../App.css";
import ArticlesHeader from './article-header';
import ArticleCard from './article-card';
import SearchBar from './searchbar';
import axios from 'axios';
import ScrollUpButton from "react-scroll-up-button";
import ErrorHeader from './error-header';
import { existsTypeAnnotation } from "@babel/types";
import * as api from '../api';
import { Link } from '@reach/router';
import createParams from '../utils'

class ArticlesList extends React.Component {
    state = {
        searchTerm: "",
        inputValue: "",
        articles: [],
        isLoading: true,
        page: 1,
        sort_by: "created_at",
        order: "asc",
        error: null
    }


    componentDidMount() {
      const params = createParams(this.props.location.search)
      api.getArticles(params)
      .then(articles => {
        this.setState({articles, isLoading: false, topic: "Front Page"})
      }).catch(error => {
        this.setState({error: {status: error.response.status, msg: error.response.data.msg}})
      })
    }


    componentDidUpdate(prevProps, prevState) {
      const params = createParams(this.props.location.search)

      if(params.topic && prevProps.location.search!==this.props.location.search){
        this.setState({topic: params.topic})
      }

      if(this.props.location.search !== prevProps.location.search) {
      api.getArticles(params).then(articles => {
        this.setState({articles})
      }).catch(error => {
        this.setState({error: {status: error.response.status, msg: error.response.data.msg}})
      })
    }
    }

     handleOrder = (event) =>  {
      this.setState({order: event.target.value})
    }
    
    handleSort = event => {
      this.setState({sort_by: event.target.value})
    }

    render () {
      const {homePage} = this.props
      

        let { articles, inputValue, isLoading, searchTerm, sort_by, order, error, topic } = this.state
        const { user } = this.props

        const filteredArticles = articles.filter(article => {
            return article.topic === searchTerm || searchTerm === "";
          });

        if(homePage === true) {
          topic = "Front Page"
        }

        let arrayIndex = 0

        if(error !== null) return <ErrorHeader error={error.status} description={error.msg}/>
        
        return <>
        <div className="ArticleDiv" ><ArticlesHeader title={topic}/>
        <form className="Sort"><label className="SortBy">Sort By:
        <select onChange={this.handleSort}>
          <option value="created_at">Date</option>
          <option value="votes">Popularity</option>
          <option value="comment_count">Activity</option>
        </select>
      </label>
      <label className="SortOrder">Order:
        <select onChange={this.handleOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <Link to={`/articles?topic=${this.state.topic}&&sort_by=${sort_by}&&order=${order}`}><button>Sort Articles</button></Link>
      </label>
      </form>
        
    <ul  className="ArticlesList">
        
        {isLoading ? <p className="Loading">We're getting your articles...</p> : filteredArticles.map(article => {
              arrayIndex ++
            return <ArticleCard key={article.article_id} article={article} position={arrayIndex} user={user}/>;
          })}
          {<ScrollUpButton />}
        </ul>
      
      </div></>
    }
}

export default ArticlesList;
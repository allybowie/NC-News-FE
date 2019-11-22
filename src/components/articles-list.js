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
        error: null,
        filtered: false
    }


    componentDidMount() {
      const params = createParams(this.props.location.search)
      api.getArticles(params)
      .then(articles => {
        if(params.topic) {
          this.setState({articles, isLoading: false, topic: params.topic})

        } else {
        this.setState({articles, isLoading: false, topic: ""})
        }
      }).catch(error => {
        this.setState({error: {status: error.response.status, msg: error.response.data.msg}})
      })
    }


    componentDidUpdate(prevProps, prevState) {

      window.scrollTo(0,0)
      const params = createParams(this.props.location.search)

      if(params.topic && prevProps.location.search!==this.props.location.search){
        this.setState({topic: params.topic})
      }

      if(this.props.location.search !== prevProps.location.search) {
      
      this.setState({isLoading: true})
      api.getArticles(params).then(articles => {
        this.setState({articles, isLoading: false})
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
        
        let category = topic
        if(homePage === true) {
          category = "front page"
        }

        let arrayIndex = 0

        if(error !== null) return <ErrorHeader error={error.status} description={error.msg}/>
        
        return <>
        <div className="ArticleDiv" ><ArticlesHeader title={category}/>
        <form className="Sort"><label className="SortBy">Sort By:
        <select onChange={this.handleSort} className= "SortSelect">
          <option value="created_at">Date</option>
          <option value="votes">Popularity</option>
          <option value="comment_count">Activity</option>
        </select>
      </label>
      <label className="SortOrder">Order:
        <select onChange={this.handleOrder} className="OrderSelect">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
        <Link to={`/articles?topic=${this.state.topic}&&sort_by=${sort_by}&&order=${order}`} className="SortLink">Sort Articles</Link>
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
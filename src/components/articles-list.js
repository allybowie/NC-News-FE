import React from "react";
import "../App.css";
import ArticlesHeader from './article-header';
import ArticleCard from './article-card';
import SearchBar from './searchbar';
import axios from 'axios';
import ScrollUpButton from "react-scroll-up-button";
import { existsTypeAnnotation } from "@babel/types";
import getArticles from '../api';
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
    }


    componentDidMount() {
      getArticles()
      .then(articles => {
        this.setState({articles, isLoading: false})
      })
    }


    componentDidUpdate(prevProps, prevState) {
      const params = createParams(this.props.location.search)

      if(params.topic && prevProps.location.search!==this.props.location.search){
        console.log(true)
        this.setState({topic: params.topic})
      }
      
     
      console.log(this.props.location.search)
      console.log(prevProps.location.search)
      if(this.props.location.search !== prevProps.location.search) {
      getArticles(params).then(articles => {
        console.log(articles)
        this.setState({articles})
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

        const { articles, inputValue, isLoading, searchTerm, sort_by, order } = this.state

        const filteredArticles = articles.filter(article => {
            return article.topic === searchTerm || searchTerm === "";
          });

         

        let arrayIndex = 0
        
        return <>
        <div className="ArticleDiv" ><ArticlesHeader title={this.state.topic}/>
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
        <div className="ArticlesList">
    <ul>
        
        {isLoading ? <p className="Loading">We're getting your articles...</p> : filteredArticles.map(article => {
              arrayIndex ++
            return <ArticleCard key={article.article_id} article={article} position={arrayIndex}/>;
          })}
          {<ScrollUpButton />}
        </ul>
      </div>
      </div></>
    }
}

export default ArticlesList;
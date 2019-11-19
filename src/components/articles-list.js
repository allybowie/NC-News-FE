import React from "react";
import "../App.css";
import ArticlesHeader from './article-header';
import ArticleCard from './article-card';
import SearchBar from './searchbar';
import axios from 'axios';
import ScrollUpButton from "react-scroll-up-button";
import { existsTypeAnnotation } from "@babel/types";
import getArticles from '../api';

class ArticlesList extends React.Component {
    state = {
        searchTerm: "",
        inputValue: "",
        articles: [],
        isLoading: true,
        page: 1
    }


    componentDidMount() {
      console.log("PROPS",this.props)
      getArticles()
      .then(articles => {
        console.log(articles)
        this.setState({articles, isLoading: false})
      })
    }

    componentDidUpdate(prevProps) {
      const {topic} = this.props
      if(topic !== prevProps.topic) {
      console.log("TOPIC", topic)
      getArticles({topic}).then(articles => {
        this.setState({articles})
      })
    }
    }

    render () {
      console.log(this.props)
        const { articles, inputValue, isLoading, searchTerm } = this.state

        const filteredArticles = articles.filter(article => {
            return article.topic === searchTerm || searchTerm === "";
          });

        let arrayIndex = 0
        
        return <>
        <div className="ArticleDiv" ><ArticlesHeader title="Front Page"/>
        <label className="Sort">
        Sort articles by: <input placeholder="Order"></input>
      </label>
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
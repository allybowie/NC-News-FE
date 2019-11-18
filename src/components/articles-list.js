import React from "react";
import "../App.css";
import ArticlesHeader from './article-header';
import ArticleCard from './article-card';
import axios from 'axios';
import ScrollUpButton from "react-scroll-up-button";

class ArticlesList extends React.Component {
    state = {
        searchTerm: "",
        inputValue: "",
        articles: [],
        isLoading: true,
        page: 1
    }

    componentDidMount() {
        axios
          .get(`http://bowie-nc-news.herokuapp.com/api/articles?topic=${this.state.searchTerm}`)
          .then(({ data }) => {
            this.setState({articles: data.articles, isLoading: false})
          });
      }


    handleChange = event => {
        this.setState({inputValue: event.target.value})
    }


    render () {
        const { articles, inputValue, isLoading, searchTerm } = this.state

        const filteredArticles = articles.filter(article => {
            return article.topic === searchTerm || searchTerm === "";
          });

        let arrayIndex = 0
        

        return <><div className="SearchBar">
        <form onSubmit={this.handleSearch}>
        <label>
          <input value={inputValue} onChange={this.handleChange} placeholder="Search NC News Topics"/>
          <button>Search Articles</button>
        </label>
        </form>
      </div> 
      <ArticlesHeader title="Front Page"/>
        <div className="ArticlesList">
    <ul>
        {filteredArticles.map(article => {
              arrayIndex ++
            return <ArticleCard article={article} position={arrayIndex}/>;
          })}
          {<ScrollUpButton />}
        </ul>
      </div></>
    }
}

export default ArticlesList;
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




    render () {
        const { articles, inputValue, isLoading, searchTerm } = this.state

        const filteredArticles = articles.filter(article => {
            return article.topic === searchTerm || searchTerm === "";
          });

        let arrayIndex = 0
        

        return <div className="ArticleDiv" ><ArticlesHeader title="Front Page"/>
        <label className="Sort">
        Sort articles by: <input placeholder="Order"></input>
      </label>
        <div className="ArticlesList">
    <ul>
        {filteredArticles.map(article => {
              arrayIndex ++
            return <ArticleCard article={article} position={arrayIndex}/>;
          })}
          {<ScrollUpButton />}
        </ul>
      </div>
      </div>
    }
}

export default ArticlesList;
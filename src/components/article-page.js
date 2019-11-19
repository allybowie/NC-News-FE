import axios from 'axios';
import React from 'react';
import ArticlesHeader from './article-header';
import ArticleById from './article-by-id';
import { Link } from '@reach/router';
import '../App.css';


class ArticlePage extends React.Component {
state = {
    article : "",
    isLoading: true
}

componentDidMount() {
    this.fetchArticle()
    this.fetchComments()
}

fetchArticle() {
    return axios.get(`http://bowie-nc-news.herokuapp.com/api/articles/${this.props.id}`)
    .then(response => {
        this.setState({article: response.data.article, isLoading: false})
    })
}

fetchComments() {}

    render () {
       const {title, body, article_id, comment_count, topic, created_at, author, votes} = this.state.article
       const {isLoading} = this.state

       const formattedDate = new Date(created_at).toLocaleString()
        // console.log("ARTICLE", article)
        return <div>
            {isLoading ? <h1>Loading article...</h1> : 
            <div>
                <ArticleById body={`${body}`} title={`${title}`} id={`${article_id}`} comment_count={`${comment_count}`} topic={`${topic}`} date={`${formattedDate}`} author={`${author}`} votes={`${votes}`}/>
                </div>}
        </div>
    }
}

export default ArticlePage;
import axios from 'axios';
import React from 'react';
import ArticlesHeader from './article-header';
import ArticleById from './article-by-id';
import { Link } from '@reach/router';
import '../App.css';
import ErrorHeader from './error-header';


class ArticlePage extends React.Component {
state = {
    article : "",
    isLoading: true,
    error: null
}

componentDidMount() {
    this.fetchArticle()
    this.fetchComments()
}

fetchArticle() {
    return axios.get(`https://bowie-nc-news.herokuapp.com/api/articles/${this.props.id}`)
    .then(response => {
        this.setState({article: response.data.article, isLoading: false})
    }).catch(error => {
        this.setState({error: {status: error.response.status, msg: error.response.data.msg}})
      })
}

fetchComments() {}


render () {

    const {error} = this.state
    
        if(error !== null) return <ErrorHeader error={error.status} description={error.msg}/>
    


       const {title, body, article_id, comment_count, topic, created_at, author, votes} = this.state.article
       const {isLoading} = this.state
       const {user} = this.props

       const formattedDate = new Date(created_at).toLocaleString()


        // console.log("ARTICLE", article)
        return <div>
            {isLoading ? <h1>Loading article...</h1> : 
            <div>
                <ArticleById user={user} body={`${body}`} title={`${title}`} id={`${article_id}`} comment_count={`${comment_count}`} topic={`${topic}`} date={`${formattedDate}`} author={`${author}`} votes={`${votes}`}/>
                </div>}
        </div>
    }
}

export default ArticlePage;
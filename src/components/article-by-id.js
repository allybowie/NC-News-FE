import React from 'react';
import '../App.css'
import SingleHeader from './single-article-header';

class ArticleById extends React.Component {

    state = {
        commentsShown: true,
        comments: []
    }

    render () {

const {title, body, id, comment_count, topic, date, author, votes} = this.props
const {commentsShown} = this.state
        return <div className="ArticleDiv">

            <SingleHeader title={`${title}`} comment_count={`${comment_count}`} topic={`${topic}`} date={`${date}`} author={`${author}`} votes={`${votes}`} />
            
            <main className="ArticleBody">{body}</main>
            
            <button className="ShowComments">{commentsShown ? <p>Hide Comments</p> : <p>Show Comments</p>}</button>
            </div>
    }
}

export default ArticleById;
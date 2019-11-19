import React from 'react';
import '../App.css'
import SingleHeader from './single-article-header';

class ArticleById extends React.Component {

    state = {

    }

    render () {

const {title, body, id, comment_count, topic, date, author, votes} = this.props

        return <div className="ArticleDiv">
            
            <SingleHeader title={`${title}`} comment_count={`${comment_count}`} topic={`${topic}`} date={`${date}`} author={`${author}`} votes={`${votes}`} />
            
            <main className="ArticleBody">{body}</main>
            
            <button className="ShowComments">Show Comments</button>
            </div>
    }
}

export default ArticleById;
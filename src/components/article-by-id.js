import React from 'react';
import '../App.css'
import SingleHeader from './single-article-header';
import CommentList from './comments-list';

class ArticleById extends React.Component {

    state = {
        commentsShown: false
    }

    handleCommentClick = () => {
        this.setState({commentsShown: !this.state.commentsShown})
    }

    render () {

    

const {title, body, id, comment_count, topic, date, author, votes} = this.props
const {commentsShown} = this.state
        return <div className="ArticleDiv">

            <SingleHeader title={`${title}`} comment_count={`${comment_count}`} topic={`${topic}`} date={`${date}`} author={`${author}`} votes={`${votes}`} />
            
            <div className="ArticleBody">{body}</div>
            <label  className="ShowComments">
            <button onClick={this.handleCommentClick}>{commentsShown ? <p>Hide Comments</p> : <p>Show Comments</p>}</button>
            
            </label>
            {commentsShown && <CommentList id={`${id}`}/>}
            </div>
    }
}

export default ArticleById;
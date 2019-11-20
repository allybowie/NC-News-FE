import React from 'react';
import {Link} from '@reach/router';
import '../App.css'
import SingleHeader from './single-article-header';
import CommentList from './comments-list';

class ArticleById extends React.Component {

    state = {
        commentsShown: false,
        inputValue: ""
    }

    handleCommentClick = () => {
        this.setState({commentsShown: !this.state.commentsShown})
    }

    render () {

        
        const handleChange = event => {
            this.setState({inputValue: event.target.value})
        }
    

const {title, body, id, comment_count, topic, date, author, votes, user} = this.props

console.log("ARTICLE PAGE USER", user)
const {commentsShown} = this.state
        return <div className="ArticleDiv">

            <SingleHeader title={`${title}`} comment_count={`${comment_count}`} topic={`${topic}`} date={`${date}`} author={`${author}`} votes={`${votes}`} />
            
            <div className="ArticleBody">{body}</div>
            <label  className="ShowComments">
            <button onClick={this.handleCommentClick} className="CommentsButton">{commentsShown ? <p>Hide Comments</p> : <p>Show Comments</p>}</button>
            <form>
                <label>
                <input className= "LeaveComment" value={this.state.inputValue} onChange={handleChange} placeholder="Write a comment here">
                </input>
                </label>
                </form>
            </label>
            {commentsShown && <CommentList id={`${id}`} user={user}/>}
            </div>
    }
}

export default ArticleById;
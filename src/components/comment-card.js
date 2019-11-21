import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../App.css'
import VoteCounter from "./vote";
import * as api from '../api';

class CommentCard extends React.Component {
    state = {
        votes: this.props.comment.votes
    }

    
    render() {
        const {user, position, comment, removeDeletedComment} = this.props

        const {votes} = this.state

        const handleClick = () => {
            api.deleteComment(comment.comment_id).then(() => {
                removeDeletedComment(comment.comment_id)
            })
        }

        let listClass = ""

        if(position%2===0){
            listClass = "CommentEven"
          } else listClass = "CommentOdd"

        const date = new Date(comment.created_at).toLocaleString()
        
        return <li className={listClass}>
            <p className="CommentAuthor">{comment.author}</p>
            <p className="CommentBody">{comment.body}</p>
            <p className="CommentDate">{date}</p>
            <VoteCounter className="CommentVotes" votes={votes} card="comment" user={user} id={comment.comment_id}/>
            {user === comment.author && <button onClick={handleClick} className="DeleteComment">Delete Comment</button>}
        </li>
    }
}

export default CommentCard;
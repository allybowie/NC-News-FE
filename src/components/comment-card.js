import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../App.css'
import * as api from '../api';

class CommentCard extends React.Component {
    state = {
        votes: ""
    }

    
    render() {
        const {user, position, comment, removeDeletedComment} = this.props

        const handleClick = () => {
            api.deleteComment(comment.comment_id).then(() => {
                removeDeletedComment(comment.comment_id)
            })
        }

        let listClass = ""

        if(position%2===0){
            listClass = "ListItemEven"
          } else listClass = "ListItemOdd"

        const date = new Date(comment.created_at).toLocaleString()
        return <li className={listClass}><div >
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{date}</p>
            <p>{comment.votes}</p>
            <p>{comment.comment_id}</p>
            {user === comment.author && <button onClick={handleClick}>Delete Comment</button>}
        </div>
        </li>
    }
}

export default CommentCard;
import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../App.css'

class CommentCard extends React.Component {
    state = {
        votes: ""
    }

    render() {
        let listClass = ""

        if(this.props.position%2===0){
            listClass = "ListItemEven"
          } else listClass = "ListItemOdd"

        const {comment} = this.props

        const date = new Date(comment.created_at).toLocaleString()
        return <li className={listClass}><div >
            <h5>{comment.author}</h5>
            <h6>{comment.body}</h6>
            <h7>{date}</h7>
            <h8>{comment.votes}</h8>
        </div>
        </li>
    }
}

export default CommentCard;
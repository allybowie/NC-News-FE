import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../App.css'

class ArticleCard extends React.Component {
    state = {
        showComments: false
    }

    render() {
        let listClass = ""

        if(this.props.position%2===0){
            listClass = "ListItemEven"
          } else listClass = "ListItemOdd"

        return (
            <li className={listClass}>
                <div onClick={this.handleClick}>
          <p>{this.props.article.title}</p>
          <p>{this.props.article.author}</p>
          <p>{this.props.article.topic}</p>
          <p>{new Date(this.props.article.created_at).toLocaleString()}</p>
          </div>
            </li>
        )
    }
}

export default ArticleCard;
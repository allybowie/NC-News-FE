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

        const {article} = this.props

        if(this.props.position%2===0){
            listClass = "ListItemEven"
          } else listClass = "ListItemOdd"
          
        return (
            <Link to={`/articles/${article.article_id}`}>
            <li className={listClass}>
                <div onClick={this.handleClick}>
          <p>{article.title}</p>
          <p>{article.author}</p>
          <p>{article.topic}</p>
          <p>{new Date(article.created_at).toLocaleString()}</p>
          </div>
            </li>
            </Link>
        )
    }
}

export default ArticleCard;
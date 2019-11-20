import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../App.css'
import Votes from './vote'
import ArrowUp from './icons8-thick-arrow-pointing-up-40.png'

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
            <li className={listClass} onClick={this.handleClick}>
          <p className="ArtCardTitle">{article.title}</p>
          <p className="ArtCardAuthorBlock">Author: {article.author}</p>
          <p className="ArtCardTopic">Category: {article.topic}</p>
          <p className="ArtCardDate">Created at: {new Date(article.created_at).toLocaleString().replace(',', ' - ')}</p>
          {/* <Votes votes={article.votes} className="ArtCardVotes"/> */}
            </li>
            </Link>
        )
    }
}

export default ArticleCard;
import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../App.css'
import VoteCounter from './vote'
import ArrowUp from './icons8-thick-arrow-pointing-up-40.png'

class ArticleCard extends React.Component {
    state = {
        showComments: false
    }

    render() {

        let listClass = ""
        
        const {article, user} = this.props
        console.log("CARD USER", user)

        if(this.props.position%2===0){
            listClass = "ListItemEven"
          } else listClass = "ListItemOdd"
          
        return (
            <div className={listClass}>
                <Link to={`/articles/${article.article_id}`}>
            <li className="ArticleListItem" onClick={this.handleClick}>
          <p className="ArtCardTitle">{article.title}</p>
          <p className="ArtCardAuthorBlock">Author: {article.author}</p>
          <p className="ArtCardTopic">Category: {article.topic}</p>
          <p className="ArtCardDate">Created at: {new Date(article.created_at).toLocaleString().replace(',', ' - ')}</p>
            </li>
            </Link>
          <VoteCounter votes={article.votes} id={article.article_id} className="ArtCardVotes" card="articleList" user={user}/>
            </div>
        )
    }
}

export default ArticleCard;
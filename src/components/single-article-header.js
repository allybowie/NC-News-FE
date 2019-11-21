import React from 'react';
import '../App.css'
import ArticlesHeader from './article-header';
import VotesCounter from './vote';

class SingleHeader extends React.Component {
    render() {
        const {title, comment_count, date, author, topic, votes, id, user} = this.props
        
        console.log("HEADER USER", votes)
         
       return  <div className="IndividualHeader">
            <p className="ArticleTitle">{title}</p>
            <p className="ArticleTopic">Subject: {topic}</p>
            <p className="ArticleAuthor">Written by {author}</p>
            <p className="ArticleDate">Posted on {date}</p>
            < VotesCounter votes={votes} id={id} className="ArtCardVotes" card="articleList" user={user}/>
        </div>
    
}
}

export default SingleHeader;
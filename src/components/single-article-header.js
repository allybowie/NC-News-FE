import React from 'react';
import '../App.css'
import ArticlesHeader from './article-header';

class SingleHeader extends React.Component {
    render() {
        console.log(this.props)
        const {title, comment_count, date, author, topic, votes} = this.props
         
       return  <div className="IndividualHeader">
            <p className="ArticleTitle">{title}</p>
            <p className="ArticleTopic">Subject: {topic}</p>
            <p className="ArticleAuthor">Written by {author}</p>
            <p className="ArticleDate">Posted on {date}</p>
            <p className="ArticleVotes">Score {votes}</p>
        </div>
    
}
}

export default SingleHeader;
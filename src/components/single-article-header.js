import React from 'react';
import '../App.css'
import ArticlesHeader from './article-header';
import VotesCounter from './vote';

class SingleHeader extends React.Component {
    render() {
        const {title, comment_count, date, author, topic, votes, id, user} = this.props
        
        console.log("HEADER USER", votes)
         
       return  <div className="IndividualHeader">
            <p className="IndiHeaderTitle">{title}</p>
            <p className="IndiHeaderTopic">Subject: {topic}</p>
            <p className="IndiHeaderAuthor">Written by {author}</p>
            <p className="IndiHeaderDate">Posted on {date}</p>
            < VotesCounter votes={votes} id={id} className="IndiHeaderVotes" card="indiArticle" user={user}/>
        </div>
    
}
}

export default SingleHeader;
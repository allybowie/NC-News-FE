import React from 'react';
import axios from 'axios';
import '../App.css'


class VoteCounter extends React.Component {
    state = {
        votesChange: 0
    }

    handleClick = (inc_votes, id) => {
        const { card } = this.props


        const voteUpdate = {
            inc_votes
        }

        let patchedItem = "comments"

        if(card === "articleList") {
            patchedItem = "articles"
        }


        axios.patch(`http://bowie-nc-news.herokuapp.com/api/${patchedItem}/${id}`, voteUpdate).then(response => {
            this.setState({votesChange: this.state.votesChange + inc_votes})
        })
    }

    render() {

        const {votes, card, user, id} = this.props


        let arrowUp = "ArticleUp"
        let arrowDown = "ArticleDown"
        let votesPosition = "ArticlePosition"
        let voteCount = "ArticleVoteCount"

        if(card === "comment") {
            arrowUp = "CommentUp"
            arrowDown = "CommentDown"
            votesPosition = "CommentVotes"
            voteCount = "CommentVoteCount"
        }

        if(card === "articleList") {
            arrowUp = "ArtCardUp"
            arrowDown = "ArtCardDown"
            votesPosition = "ArtCardVotes"
            voteCount = "ArtCardVoteCount"
        }

        console.log("VOTE CSS",arrowUp, arrowDown, votesPosition, voteCount)

        let displayedVotes = +votes + this.state.votesChange

    return <div className={votesPosition}>{user !== "" && this.state.votesChange !== 1 && <button className={arrowUp} onClick={() => {this.handleClick(1, id)}}>Upvote</button>}<p className={voteCount}>{displayedVotes}</p>{user !== "" && this.state.votesChange !== -1 && <button className={arrowDown} onClick={()=>{this.handleClick(-1, id)}}>Downvote</button>}</div>
    }
}


export default VoteCounter
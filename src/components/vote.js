import React from 'react';
import axios from 'axios';
import '../App.css'
import ArrowUp from './icons8-slide-up-40.png'
import ArrowDown from './icons8-down-button-40.png'

class VoteCounter extends React.Component {
    state = {
        votesChange: 0
    }

    handleClick = (inc_votes, id) => {
        console.log("PROPS",this.props)
        const { card } = this.props

        console.log("CARD", card)

        const voteUpdate = {
            inc_votes
        }

        let patchedItem = "comments"

        if(card === "articleList") {
            patchedItem = "articles"
        }

        console.log("VOTE UPDATE", voteUpdate)

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
            arrowUp = "CommentUp"
            arrowDown = "CommentDown"
            votesPosition = "CommentVotes"
            voteCount = "CommentVoteCount"
        }

        let displayedVotes = votes + this.state.votesChange

    return <div className={votesPosition}>{user !== "" && this.state.votesChange !== 1 && <button className={arrowUp} onClick={() => {this.handleClick(1, id)}}>Upvote</button>}<p className={voteCount}>{displayedVotes}</p>{user !== "" && this.state.votesChange !== -1 && <button className={arrowDown} onClick={()=>{this.handleClick(-1, id)}}>Downvote</button>}</div>
    }
}

{/* <img src={ArrowUp} alt="Up Vote"/> */}
{/* <img src={ArrowDown} alt="Down Vote" /> */}

export default VoteCounter
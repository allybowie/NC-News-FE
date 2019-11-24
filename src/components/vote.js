import React from "react";
import "../App.css";
import * as api from "../api";

class VoteCounter extends React.Component {
  state = {
    votesChange: 0
  };

  handleClick = (inc_votes, id) => {
    const { patch } = this.props;

    const voteUpdate = {
      inc_votes
    };

    api.updateVote(id, patch, voteUpdate).then(response => {
      this.setState({ votesChange: this.state.votesChange + inc_votes });
    });
  };

  render() {
    const { votes, card, user, id } = this.props;

    let displayedVotes = +votes + this.state.votesChange;

    return (
      <div className={`${card}Votes`}>
        {user !== "" && this.state.votesChange !== 1 && (
          <button
            className={`${card}Up`}
            onClick={() => {
              this.handleClick(1, id);
            }}
          >
            Upvote
          </button>
        )}
        <p className={`${card}VoteCount`}>{displayedVotes}</p>
        {user !== "" && this.state.votesChange !== -1 && (
          <button
            className={`${card}Down`}
            onClick={() => {
              this.handleClick(-1, id);
            }}
          >
            Downvote
          </button>
        )}
      </div>
    );
  }
}

export default VoteCounter;

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

    api.updateVote(id, patch, voteUpdate).then(() => {
      this.setState({ votesChange: this.state.votesChange + inc_votes });
    });
  };

  render() {
    const { votes, card, user, id } = this.props;
    const { votesChange } = this.state;

    let displayedVotes = +votes + votesChange;

    return (
      <div className={`${card}Votes`}>
        {user !== "" && votesChange !== 1 && (
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
        {user !== "" && votesChange !== -1 && (
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

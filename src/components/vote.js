import React from 'react';
import axios from 'axios';
import '../App.css'
import ArrowUp from './icons8-slide-up-40.png'
import ArrowDown from './icons8-down-button-40.png'

class Votes extends React.Component {
    state = {
        votes: ""
    }

    render() {

        const {votes} = this.props
        return <div><button className="ArrowUpButton"><img src={ArrowUp} alt="Up Vote"/></button><p className="ArticleVoteCount">{votes}</p><button className="ArrowDownButton"><img src={ArrowDown} alt="Down Vote" /></button></div>
    }
}

export default Votes
import React from 'react';
import { Router } from '@reach/router';
import { Link } from "@reach/router";
import logo from './logo.svg';
import './App.css';
import ArticlesList from './components/articles-list';
import axios from 'axios';
class App extends React.Component {
  state = {
    currentSearchTerm: "",
    inputValue: ""
  }
  render() {
  const handleChange = event => {
      this.setState({inputValue: event.target.value})
  }

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   axios.get(`http://bowie-nc-news.herokuapp.com/api/articles`, {
  //     params: {
  //       topic: this.state.inputValue
  //     }
  //   }).then(response => {
  //     this.setState({})
  //   })
  // }

  return (
  <div className="App">
      <header className="Logo">
      NC News: The Best Place For NC News!
      </header>
      <div className="SearchBar">
        <form>
        <label>
          <input value={this.state.inputValue} onChange={handleChange} placeholder="Search NC News Topics"/>
          <button link={`/articles?topic=${this.state.inputValue}`}>Search Articles</button>
        </label>
        </form>
        </div>
      <Router className="Main">
      <ArticlesList path="/"/>
      </Router>
    
    </div>
  )
  }
  
}

export default App;

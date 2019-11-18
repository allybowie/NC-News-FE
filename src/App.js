import React from 'react';
import { Router } from '@reach/router';
import { Link } from "@reach/router";
import logo from './logo.svg';
import './App.css';
import ArticlesList from './components/articles-list';
// import SearchBar from './components/search-bar';

class App extends React.Component {
  state = {
    currentSearchTerm: "",
    inputValue: ""
  }
  render() {

  // handleChange = event => {
  //     this.setState({inputValue: event.target.value})
  // }

  return (
  <div className="App">
      <header className="Logo">
      NC News: The Best Place For NC News!
      </header>
      <div className="SearchBar">
        <form>
        <label>
          <input value={this.state.inputValue} placeholder="Search NC News Topics"/>
          <button>Search Articles</button>
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

import React from 'react';
import { Router } from '@reach/router';
import { Link } from "@reach/router";
import logo from './logo.svg';
import './App.css';
import ArticlesList from './components/articles-list';
// import SearchBar from './components/search-bar';

class App extends React.Component {
  state = {
    currentSearchTerm: ""
  }
  render() {
  return (<div className="App">
      <header className="Logo">
      NC News: The Best Place For NC News!
      </header>
      <label className="Sort">
        Sort articles by: <input placeholder="Order"></input>
      </label>
      <ArticlesList />
    </div>
  )
  }
  
}

export default App;

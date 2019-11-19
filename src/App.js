import React from 'react';
import { Router } from '@reach/router';
import { Link } from "@reach/router";
import logo from './logo.svg';
import './App.css';
import ArticlesList from './components/articles-list';
import ArticlePage from './components/article-page';
import SearchBar from './components/searchbar';
import axios from 'axios';



class App extends React.Component {
  render() {

  return (
  <div className="App">
      <header className="Logo">
      NC News: The Best Place For NC News!
      </header>
      <SearchBar />
      <Router className="Main">
      <ArticlesList path="/"/>
      <ArticlePage path="/articles/:id/*"/>
      </Router>
    
    </div>
  )
  }
  
}

export default App;

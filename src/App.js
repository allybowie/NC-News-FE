import React from 'react';
import { Router } from '@reach/router';
import { Link } from "@reach/router";
import logo from './logo.svg';
import './App.css';
import ArticlesList from './components/articles-list';
import ArticlePage from './components/article-page';
import SearchBar from './components/searchbar';
import Username from './components/username';
import Login from './components/login';
import HomeButton from './components/homebutton';
import axios from 'axios';



class App extends React.Component {
  state = {
    user: ""
  }

  handleLogin = user => {
    if(user !== this.state.user) {
    this.setState({user})
    }
  }
  
  render() {

    console.log("USER", this.state.user)
   

  return (
  <div className="App">
      <header className="Logo">
      NC News: The Best Place For NC News!
      </header>
      <HomeButton />
      <SearchBar/>
      <Username user={this.state.user}/>
      <Login handleLogin={this.handleLogin} user={this.state.user}/>
      <Router className="Main">
      <ArticlesList path="/" user={this.state.user}/>
      {/* <A */}
      <ArticlePage path="/articles/:id/*" user={this.state.user}/>
      {/* <ArticlesList path="/articles/topic/:topic" /> */}
      <ArticlesList path="/articles" user={this.state.user}/>
      </Router>
    </div>
  )
  }
  
}

export default App;

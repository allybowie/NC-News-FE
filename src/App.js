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
import ErrorPage from './components/error';
import axios from 'axios';



class App extends React.Component {
  state = {
    user: "",
    homePage: true
  }

  handleLogin = user => {
    if(user !== this.state.user) {
    this.setState({user})
    }
  }

 

  goHome = event => {
    this.setState({homePage: true})
  }

  goToTopic = event => {
    this.setState({homePage: false})
  }
  
  render() {

    console.log("HOMEPAGE?", this.state.homePage)
   

  return (
  <div className="App">
      <header className="App-Header">
      <p className="Logo">nc news</p>
      <HomeButton goHome={this.goHome}/>
      <SearchBar goToTopic={this.goToTopic} handleSearch={this.handleSearch}/>
      <Username user={this.state.user}/>
      <Login handleLogin={this.handleLogin} user={this.state.user}/>
      </header>
      <Router className="Main">
      <ArticlesList path="/" user={this.state.user} homePage={this.state.homePage}/>
      {/* <A */}
      <ArticlePage path="/articles/:id/*" user={this.state.user}/>
      {/* <ArticlesList path="/articles/topic/:topic" /> */}
      <ArticlesList path="/articles" user={this.state.user} homePage={this.state.homePage}/>
      <ErrorPage default />
      </Router>
    </div>
  )
  }
  
}

export default App;

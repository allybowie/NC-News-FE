import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import ArticlesByTopic from "./components/articles-by-topic";
import ArticlePage from "./components/article-page";
import SearchBar from "./components/searchbar";
import Username from "./components/username";
import Login from "./components/login";
import HomeButton from "./components/homebutton";
import ErrorPage from "./components/error";

class App extends React.Component {
  state = {
    user: ""
  };

  handleLogin = user => {
    if (user !== this.state.user) {
      this.setState({ user });
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <header className="App-Header">
          <p className="Logo">nc news</p>
          <HomeButton />
          <SearchBar />
          <Username user={user} />
          <Login handleLogin={this.handleLogin} user={user} />
        </header>
        <Router className="Main">
          <ArticlesByTopic path="/" user={user} />
          <ArticlePage path="/articles/:id/*" user={user} />
          <ArticlesByTopic path="/articles/topic/:topic" user={user} />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}

export default App;

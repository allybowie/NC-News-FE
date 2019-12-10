import React from "react";
import { Link } from "@reach/router";

class SearchBar extends React.Component {
  state = {
    inputValue: ""
  };

  render() {
    const handleChange = event => {
      this.setState({ inputValue: event.target.value });
    };

    const handleClick = () => {
      this.setState({ inputValue: "" });
    };

    const { inputValue } = this.state;

    return (
      <form className="SearchBar">
        <input
          className="SearchInput"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type to search categories"
        />
        <Link
          to={`/articles/topic/${inputValue.toLowerCase()}`}
          className="SearchButtonLabel"
        >
          <button className="SearchButton" onClick={handleClick}>
            Search
          </button>
        </Link>
      </form>
    );
  }
}

export default SearchBar;

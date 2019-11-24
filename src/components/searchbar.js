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

    const handleClick = event => {
      // console.log(event);
      this.setState({ inputValue: "" });
    };

    return (
      <form className="SearchBar">
        <input
          className="SearchInput"
          value={this.state.inputValue}
          onChange={handleChange}
          placeholder="Type to search categories"
        />
        <Link
          to={`/articles/topic/${this.state.inputValue}`}
          className="SearchButtonLabel"
        >
          <button className="SearchButton" onClick={handleClick}>
            Search
          </button>
        </Link>
      </form>
    );
    //possibly link to parametric endpoint eg `/articles/topic/:topic
  }
}

export default SearchBar;

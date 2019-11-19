import React from 'react';
import { Link } from '@reach/router';



class SearchBar extends React.Component {
state = {
    currentSearchTerm: "",
    inputValue: ""
}


render(){

    const handleChange = event => {
        this.setState({inputValue: event.target.value})
    }
return  <form className="SearchBar">
        <label>
          <input value={this.state.inputValue} onChange={handleChange} placeholder="Search NC News Topics"/>
          <button link={`/articles?topic=${this.state.inputValue}`}>Search Articles By Topic</button>
        </label>
        </form>
        
}
}

export default SearchBar;
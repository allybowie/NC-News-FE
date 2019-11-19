import React from 'react';
import { Link } from '@reach/router';



class SearchBar extends React.Component {
state = {
    currentSearchTerm: "",
    inputValue: ""
}


render(){
    console.log(this.state.inputValue)
    const handleChange = event => {
        this.setState({inputValue: event.target.value})
    }
return  <form className="SearchBar">
        <label>
          <input value={this.state.inputValue} onChange={handleChange} placeholder="Search NC News Topics"/>
          <Link to={`/articles/topic/${this.state.inputValue}`}><button>Search Articles By Topic</button></Link>
        </label>
        </form>
        
}
}

export default SearchBar;
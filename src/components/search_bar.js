
import React, { Component } from 'react'; //same as Component = React.Component;



class SearchBar extends Component {
  //only class based components has a state
  constructor(props) {
    super(props);
    //only set state like this in the constructor else use setState
    this.state = { term: ''};
  }

  
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => 
          //setState automatic changes and updates our state 
          this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    //write out the input to the inputform
    this.setState({term});
    //updates 'SearchBar onSearchTermChange={term =>' with new term 
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
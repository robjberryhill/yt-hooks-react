import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(term);
  };
};

class SearchBar extends React.Component {



  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input onChange={this.onInputChange} type="text" value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

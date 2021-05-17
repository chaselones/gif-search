import React, { Component } from 'react';

export default class SearchForm extends Component {

  state = {
    searchText: '',
    selectedRating: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText, this.state.selectedRating);
    e.currentTarget.reset();
  }

  onSelectChange = e => {
    console.log(e.target.value)

    // We have to use a callback because setState is asynchronous,
    // And if we immediately try to access state after setting state,
    // state will hold the previous state value.
    this.setState({ selectedRating: e.target.value }, () => {
      this.props.onSearch(this.state.searchText, this.state.selectedRating);
    });

    console.log(this.state.selectedRating)
  }


  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
          onChange={this.onSearchChange}
          name="search"
          placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        <p>Select a rating for GIF results: </p>
        <select id="rating-selector" onChange={this.onSelectChange}>
          <option default value="">-</option>
          <option value="g">G</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
      </form>
    );
  }
}
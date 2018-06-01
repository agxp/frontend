import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form action="" className="form-inline">
        <input type="text" placeholder="Search" className="form-control searchbar" />
        <button type="button" className="form-control">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    );
  }
}

export default SearchBar;

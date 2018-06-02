import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class Header extends Component {
  render() {
    return (
        <div className="navbar-me">
          <div className="navbar-me-left">
            <a href="#" className="hamburger">
              <i className="fa fa-bars" aria-hidden="true" />
            </a>
            <a href="#">
              <img src="CloudFlix.png" alt="CloudFlix" />
            </a>
            <SearchBar/>
          </div>
          <div className="navbar-me-right">
            <a href="#">
              <i className="fa fa-upload" aria-hidden="true" />
            </a>
            <a href="#" className="btn btn-primary">
              Sign in
            </a>
          </div>
      </div>
    );
  }
}
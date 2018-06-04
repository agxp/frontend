import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import WatchVideoPage from './components/Video/WatchVideoPage';

class App extends Component {
  render() {
    if (window.location.href.includes("/watch?id=")) {
      return (
        <WatchVideoPage/>
      );
    }
    return <Home/>

  }
}

export default App;

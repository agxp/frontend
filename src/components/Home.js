import React, { Component } from 'react';
import Header from './Header';
import Trending from './Video/TrendingVideos'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12" style={{padding: 0}}>
              <div className="tabbar-me">
                <ul className="list-inline margin-clear">
                  <li className="active">Home</li>
                </ul>
              </div>
              <Trending/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
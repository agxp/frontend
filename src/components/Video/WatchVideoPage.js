import React, {Component} from 'react';
import Header from '../Header';
import Video from './Video';
import Comments from '../Comments/Comments';
import Footer from '../Footer';

class WatchVideoPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Video/>
        <Comments/>
        <Footer/>
      </div>
    );
  }
}

export default WatchVideoPage;
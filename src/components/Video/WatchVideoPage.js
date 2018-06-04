import React, {Component} from 'react';
import Header from '../Header';
import Video from './Video';
import Comments from '../Comments/Comments';
import Footer from '../Footer';
import * as helpers from '../../helpers'

export default class WatchVideoPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      video_info_response: null,
      video_response: null,
      id: null,
    };
  };

  componentDidMount() {
    let thisURL = new URL(window.location);

    let id = thisURL.searchParams.get("id");
    if (id) {
       helpers.GetVideoInfo(id)
        .then( (response) => {
          return response.json()})
        .then( (res) => {
          console.log(res);
          this.setState({video_info_response: res});
        });

      helpers.GetVideoURL(id, "144p")
        .then( (response) => {
          return response.json() })
        .then( (res) => {
          console.log(res);
          this.setState({video_response: res, id: id});
        });
    }

  };

  render() {
    const videoInfoResponse = this.state.video_info_response;
    const videoResponse = this.state.video_response;
    const id = this.state.id;
    if (videoResponse != null && videoInfoResponse != null) {
      return (
        <div>
          <Header/>
          <Video id={id} videoInfoResponse={videoInfoResponse} videoResponse={videoResponse}/>
          <Comments/>
          <Footer/>
        </div>
      );
    }

    return <div>Loading...</div>

  }
}
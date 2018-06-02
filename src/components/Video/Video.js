import React, {Component} from 'react';
import VideoInfo from './VideoInfo'


export default class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {url: '', resolution: ''}
  }

  componentDidMount() {
    this.GetVideo();
  }

  GetVideo() {
    let videoResponse = this.props.videoResponse;
     if (videoResponse) {
       let url = videoResponse["presigned_url"];
       this.setState({url});
       console.log(url)
     }
  }

  render() {
    const url = this.state.url;
    if (url != null) {
      return (
        <div>
          <video id="video" autoPlay controls src={url}/>
          <VideoInfo videoInfoResponse={this.props.videoInfoResponse}/>
        </div>
      );
    }
    return <div>Loading...</div>

  }
}
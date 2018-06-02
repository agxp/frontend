import React, {Component} from 'react';


export default class VideoInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {title: null, description: null, date_created: null, resolutions: null}
  }

  componentDidMount() {
    this.GetVideoInfo();
  }

  GetVideoInfo() {
    let videoInfoResponse = this.props.videoInfoResponse;
    if (videoInfoResponse) {
      let title = videoInfoResponse["title"];
      let description = videoInfoResponse["description"];
      let date_created = videoInfoResponse["date_created"];
      let resolutionObj = videoInfoResponse["resolutions"];
      let resolutions = [];
      if (resolutionObj.q144p) {
        resolutions.push("144p")
      }
      if (resolutionObj.q360p) {
        resolutions.push("360p")
      }
      if (resolutionObj.q480p) {
        resolutions.push("480p")
      }
      if (resolutionObj.q720p) {
        resolutions.push("720p")
      }
      if (resolutionObj.q1080p) {
        resolutions.push("1080p")
      }

      this.setState({title, description, date_created, resolutions});
    }
  }

  render() {
    const title = this.state.title;
    const description = this.state.description;
    const date_created = this.state.date_created;
    const resolutionsObj = this.state.resolutions;
    if (title != null) {
      const resolutions = resolutionsObj.map((r) => <li>{r}</li>);
      return (
        <div className="video-info">
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div>{date_created}</div>
          <h4>{resolutions}</h4>
        </div>
      )
    }
    return <div>Loading...</div>

  }
}


import React, {Component} from 'react';

export default class VideoCompact extends Component {
  constructor(props) {
    super(props);

    this.state = {title: null, views: null, date_created: null, runtime: null, thumbnail_url: null}
  }

  componentDidMount() {
    this.GetVideoCompact();
  }

  GetVideoCompact() {
    let videoCompact = this.props.video;
    if (videoCompact) {
      let title = videoCompact["title"];
      let date_created = videoCompact["date_created"];
      let runtime = videoCompact["runtime"] ? videoCompact["runtime"] : "10:00";
      // let thumbnail_url = videoCompact["thumbnail_url"];
      let thumbnail_url = "http://192.168.1.74:32218/thumb/file.jpg";
      let views = videoCompact["views"] ? videoCompact["views"] : 0;

      this.setState({title, date_created, runtime, thumbnail_url, views});
    }
  }

  render() {
    let title = this.state.title;
    let views = this.state.views;
    let date_created = this.state.date_created;
    let runtime = this.state.runtime;
    let thumbnail_url = this.state.thumbnail_url;

    if (title != null) {
      return (
        <div className="card">
          <img
            src={thumbnail_url}
            className="thumb"
            alt=""/>
          <p>{runtime}</p>
          <h2>{title}</h2>
          <p>{views} views</p>
          <p>Uploaded: {date_created}</p>
        </div>
      );
    }
    return (
      <div className="card">
        <img
          src=""
          alt=""/>
        <h2>Loading</h2>
        <p></p>
      </div>
    );
  }
}


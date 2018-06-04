import React, {Component} from 'react';

export default class VideoCompact extends Component {
  constructor(props) {
    super(props);

    this.state = {id: null, title: null, views: null, date_created: null, runtime: null, thumbnail_url: null}
  }

  componentDidMount() {
    this.GetVideoCompact();
  }

  GetVideoCompact() {
    let videoCompact = this.props.video;
    if (videoCompact) {
      let id = videoCompact["id"];
      let title = videoCompact["title"];
      let date_created = videoCompact["date_created"];
      let runtime = videoCompact["runtime"] ? videoCompact["runtime"] : "10:00";
      // let thumbnail_url = videoCompact["thumbnail_url"];
      let thumbnail_url = "http://192.168.1.74:32218/thumb/" + id + ".jpg";
      let views = videoCompact["views"] ? videoCompact["views"] : 0;

      this.setState({id, title, date_created, runtime, thumbnail_url, views});
    }
  }

  render() {
    let id = this.state.id;
    let title = this.state.title;
    let views = this.state.views;
    let date_created = this.state.date_created;
    let runtime = this.state.runtime;
    let thumbnail_url = this.state.thumbnail_url;

    if (title != null) {
      return (
        <div className="card">
          <a href={"/watch?id=" + id}>
            <img src={thumbnail_url} className="thumb" alt=""/>
          </a>
          <p>{runtime}</p>
          <a href={"/watch?id=" + id}>{title}</a>
          <p>{views} views</p>
          <p>Uploaded: {date_created}</p>
        </div>
      );
    }
    return null ;
  }
}


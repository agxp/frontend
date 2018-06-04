import React, {Component} from 'react';
import VideoCompact from './VideoCompact';
import * as helpers from '../../helpers';

export default class TrendingVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {trending: null}
  }

  componentDidMount() {
    helpers.GetTrending()
      .then( (response) => {
        return response.json() })
      .then( (res) => {
        console.log(res);
        this.setState({trending: res});
      });


      // helpers.GetVideoInfo(id)
      //   .then( (response) => {
      //     return response.json()})
      //   .then( (res) => {
      //     console.log(res)
      //     this.setState({video_info_response: res});
      //   });



  };

  render() {
    let trending = this.state.trending;
    if (trending != null) {
      let data = trending.data.map((v) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-3">
            <VideoCompact video={v} />
          </div>
        )
      });
      return (
        <div className="wrapper-grey">
          <div className="vid-content">
            <h3>Trending</h3>
            <div className="row">
            {data}
            </div>
          </div>
        </div>
      )
    }
    return "Loading"
  }
}


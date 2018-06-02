import React, {Component} from 'react';
import VideoCompact from './VideoCompact';

export default class TrendingVideos extends Component {
  render() {
    return (
      <div className="wrapper-grey">
        <div className="vid-content">
          <h3>Trending</h3>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
            <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <VideoCompact/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


import React, {Component} from 'react';
import * as helpers from '../../helpers'

let ROUTER_URL = 'router';

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {comments: []}
  }

  componentDidMount() {
    this.GetComments();
  }

  GetComments() {
    // let comments = helpers.GetComments(this.props.video_id);
    // this.setState({comments})
  }

  render() {
    // const comments = this.state.comments;
    return (
      <div>comments
      </div>
    );
  }
}


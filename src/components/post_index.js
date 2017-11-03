import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        Post Index
      </div>
    )
  }
}

export default connect(null, { fetchPost })(PostIndex);

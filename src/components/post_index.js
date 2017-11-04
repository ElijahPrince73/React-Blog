import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost() {
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className='text-right'>
          <Link className='btn btn-primary' to='/post/new'>Add a Post</Link>
        </div>
        <h3>Post</h3>
        <ul>{this.renderPost()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);

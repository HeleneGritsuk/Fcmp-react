import React from 'react';
import { connect } from 'react-redux';


import Posts from './Posts.jsx';

class PostList extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <Posts posts = {posts}/>
    );
  }
}


const getVisiblePosts = (
  posts,
  filter
) => {
  switch (filter) {
    case '':
      return posts;
    default:
      return posts.filter((item) => {
        return item.author.toLowerCase().search(filter) !== -1;
      });
  }
};

const mapStateToProps = (
  state
) => {
  return {
    posts: getVisiblePosts(
      state.posts,
      state.visibilityFilter
    ),
    filter: state.visibilityFilter
  };
};

export default connect(
  mapStateToProps
)(PostList);

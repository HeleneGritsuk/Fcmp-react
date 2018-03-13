import React from 'react';
import { connect } from 'react-redux';


import Posts from './Posts.jsx';
import { getAllPosts } from '../../redux/actions';


class PostList extends React.Component {
  componentDidMount() {

    this.props.getAllPosts();
  }

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
    debugger;
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

const mapDispatchProps = (dispatch) => {
  return {
    getAllPosts: () => {
      dispatch(getAllPosts());
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchProps
)(PostList);

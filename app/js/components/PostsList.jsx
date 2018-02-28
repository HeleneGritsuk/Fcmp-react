import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/postsList'


const Post = ({
  onClick,
  author,
  text,
  title
  }) => (
  <div style = {styles.postContainer}>
    <div style = {styles.titleStyle}>{title}</div>
    <div style = {styles.authorWrapper}>by {author}</div>
    <div>Text: {text}</div>
  </div>
);

const PostList = ({
  posts,
  onTodoClick
  }) => (
  <ul>
    {
      posts.map(todo =>
        <Post
          key={todo.id}
          {...todo}
        />
      )}
  </ul>
);

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
}

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

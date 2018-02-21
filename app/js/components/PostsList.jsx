import React from 'react';
import { connect } from 'react-redux';

const titleStyle = {
  fontWeight: 'bold',
  textTransform: 'uppercase'
};

const postContainer = {
  width: '300px',
  border: '1px solid #dadada',
  borderRadius: '5px',
  padding: '15px',
  marginBottom: '15px'
}

const authorWrapper = {
  color: '#8d8d8d',
  fontSize: '12px',
  fontStyle: 'italic',
  textAlign: 'right',
}

const Post = ({
  onClick,
  author,
  text,
  title
  }) => (
  <div style = {postContainer}>
    <div style = {titleStyle}>{title}</div>
    <div style = {authorWrapper}>by {author}</div>
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
